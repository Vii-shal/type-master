import React, { useState, useEffect } from 'react'
import './Home.css'
import { useNavigate } from "react-router-dom";
import TypingChart from '../Chart/Chart';
import { width } from '@fortawesome/free-solid-svg-icons/fa0';

function Home() {

    const navigate = useNavigate();
    const [testDuration, setTestDuration] = useState(1);
    const [chartData, setChartData] = useState({});
    const [selectGraph, setSelectGraph] = useState("accurracy")
    const [testType, setTestType] = useState(1)
    const [refreshGraph, setRefreshGraph] = useState(1)


    useEffect(()=>{
        setRefreshGraph(refreshGraph+1)
    },[testDuration, selectGraph, testType])

    useEffect(() => {
        console.log("testduration", testDuration)
        const data = getChartData(testDuration);
        setChartData(data);
    }, [testDuration, selectGraph, testType]);

    function startTest(testDuration) {
        console.log(testDuration, '[[[[[[[[[[[[[[')
        let durationInSeconds;
        switch (testDuration) {
            case 1:
                durationInSeconds = 60;
                break;
            case 3:
                durationInSeconds = 180;
                break;
            case 5:
                durationInSeconds = 300;
                break;
            default:
                console.error("Invalid test duration:", testDuration);
                return;
        }

        localStorage.setItem('testTime', durationInSeconds)
        localStorage.setItem('correct', 0);
        localStorage.setItem('incorrect', 0);
        localStorage.setItem('wordLetterIndex', JSON.stringify([{"word" : 0, "letter" : 0}]));

        navigate("/typingbox");
    }

    function getChartData(testDuration) {
        const allTests = JSON.parse(localStorage.getItem('allTests')) || []
        console.log(testDuration, "////////1111111111111111")
        const selectedTestTypes = allTests.filter((test) => test.testTime === testDuration)
        console.log(selectedTestTypes, "////////1111111111111111")

        if (selectedTestTypes.length === 0) {
            console.log("000")
            let chartData;
            if (selectGraph === "accurracy") {
                chartData = {
                    chartId: "accuracy-chart",
                    data: [100, 100, 100],
                    categories: ["7 July", "8 July", "9 July"],
                    min: 0,
                    max: 100,
                }
            }
            else if (selectGraph === "wpm") {
                chartData = {
                    chartId: "wpm",
                    data: [100, 100, 100],
                    categories: ["7 July", "8 July", "9 July"],
                    min: 0,
                    max: 30,
                }
            }
            return chartData;
        }

        let accuracy = []
        let wpm = []
        let test_number = []
        selectedTestTypes.map((test, id) => {
            if (test.accuracy === "NaN"){
                accuracy.push(0)
            }else{
                accuracy.push(test.accuracy)
            }
            wpm.push(test.wpm)
            test_number.push(`test${id + 1}`);
        })

        let chartData;
        if (selectGraph === "accurracy") {
            chartData = {
                chartId: "accuracy",
                data: accuracy,
                categories: test_number,
                min: 0,
                max: 100,
            }
        }
        else if (selectGraph === "wpm") {
            chartData = {
                chartId: "wpm",
                data: wpm,
                categories: test_number,
                min: 0,
                max: 30,
            }
        }

        return chartData;
    }
    console.log(chartData, '---')

    function selectTest(testNum) {
        const test1 = document.getElementById('test1')
        const test2 = document.getElementById('test2')
        const test3 = document.getElementById('test3')
        const test1_container = document.getElementById('test1-container')
        const test2_container = document.getElementById('test2-container')
        const test3_container = document.getElementById('test3-container')
        if (testNum == 1) {
            test1.classList.add('onclick-home-type-test-container-inner')
            test3.classList.remove('onclick-home-type-test-container-inner')
            test2.classList.remove('onclick-home-type-test-container-inner')
            test1_container.classList.add('onclick-home-type-test-container')
            test3_container.classList.remove('onclick-home-type-test-container')
            test2_container.classList.remove('onclick-home-type-test-container')
            setTestDuration(1)
            setTestType(1)

        }
        else if (testNum == 2) {
            test2.classList.add('onclick-home-type-test-container-inner')
            test3.classList.remove('onclick-home-type-test-container-inner')
            test1.classList.remove('onclick-home-type-test-container-inner')
            test2_container.classList.add('onclick-home-type-test-container')
            test3_container.classList.remove('onclick-home-type-test-container')
            test1_container.classList.remove('onclick-home-type-test-container')
            setTestDuration(3)
            setTestType(3)
        }
        else if (testNum == 3) {
            test3.classList.add('onclick-home-type-test-container-inner')
            test1.classList.remove('onclick-home-type-test-container-inner')
            test2.classList.remove('onclick-home-type-test-container-inner')
            test3_container.classList.add('onclick-home-type-test-container')
            test1_container.classList.remove('onclick-home-type-test-container')
            test2_container.classList.remove('onclick-home-type-test-container')
            setTestDuration(5)
            setTestType(5)
        }

    }

    // for result-box
    const allTests = JSON.parse(localStorage.getItem('allTests')) || []

    // set graph type
    const graphType = (graph) => {
        if (graph == "accurracy") {
            setSelectGraph("accurracy")
            document.querySelector('.graph-accuracy-btn').classList.add('onclick-graph-btn-bg-color')
            document.querySelector('.graph-speed-btn').classList.remove('onclick-graph-btn-bg-color')
        }
        if (graph == "wpm") {
            setSelectGraph("wpm")
            document.querySelector('.graph-accuracy-btn').classList.remove('onclick-graph-btn-bg-color')
            document.querySelector('.graph-speed-btn').classList.add('onclick-graph-btn-bg-color')
        }
    }
    return (
        <div>
            <div className="home-container">
                <div className='typing-tests-title'>
                    Typing Tests
                </div>
                <hr className='hrr'/>
                <div className="home-typing-test-info">
                    <div className="home-typing-test-type">

                        <div className='home-type-test-container onclick-home-type-test-container' id='test1-container'>
                            <div className="home-test onclick-home-type-test-container-inner" id='test1' onClick={() => { selectTest(1) }}>
                                <div className="home-test-timing">1:00 Test</div>
                                <div className="home-test-btn typing-test-btn" onClick={() => startTest(1)}>Start Test</div>
                            </div>
                        </div>

                        <div className='home-type-test-container' id='test2-container'>
                            <div className="home-test" id='test2' onClick={() => { selectTest(2) }}>
                                <div className="home-test-timing">3:00 Test</div>
                                <div className="home-test-btn typing-test-btn" onClick={() => startTest(3)}>Start Test</div>
                            </div>
                        </div>

                        <div className='home-type-test-container' id='test3-container'>
                            <div className="home-test" id='test3' onClick={() => { selectTest(3) }}>
                                <div className="home-test-timing">5:00 Test</div>
                                <div className="home-test-btn typing-test-btn" onClick={() => startTest(5)}>Start Test</div>
                            </div>
                        </div>
                    </div>
                    <div className="typing-test-graph">
                        <div className="typing-test-graph-desc">
                            <div className="typing-test-graph-title"><span>{testDuration} </span> Min Test</div>
                            <div className="typing-test-graph-sub-title">
                                <div className="graph-btn graph-accuracy-btn" onClick={() => graphType("accurracy")}>Accurracy(%)</div>
                                <div className="graph-btn graph-speed-btn" onClick={() => graphType("wpm")}>Speed(WPM)</div>
                            </div>
                        </div>
                        {chartData.chartId ? <TypingChart key={refreshGraph} {...chartData} /> : <p>Loading chart data...</p>}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home
