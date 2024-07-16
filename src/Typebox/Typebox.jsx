// src/App.js
import React, { useState, useEffect } from 'react';
import Typetest from './Typetest';
import './Typebox.css'
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClockRotateLeft, faVolumeHigh, faVideoSlash } from '@fortawesome/free-solid-svg-icons';

function Typebox() {

 const [testText, setTestText] = useState( 'Type this text as fast as you can! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic corrupti quas dolores exercitationem adipisci aperiam in eum. Quidem eaque amet laboriosam harum eveniet reiciendis, sed quibusdam facere porro eum numquam.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa sint provident exercitationem ad consequatur voluptates et totam illo dolores cupiditate! sit amet consectetur adipisicing elit. Hic corrupti quas dolores exercitationem adipisci aperiam in eum. Quidem eaque amet laboriosam harum eveniet reiciendis, sed quibusdam facere porro eum numquam.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa sint provident exercitationem ad consequatur voluptates et totam illo dolores cupiditate! Infrastructure as a service (IaaS) refers to online services that provide high-level APIs used to abstract various low-level details of underlying network infrastructure like physical computing resources, location, data partitioning, scaling, security, backup, etc. A hypervisor runs the virtual machines as guests. Pools of hypervisors within the cloud operational system can support large numbers of virtual machines and the ability to scale services up and down according to customers varying requirements. Linux containers run in isolated partitions of a single Linux kernel running directly on the physical hardware. Linux cgroups and namespaces are the underlying Linux kernel technologies used to isolate, secure and manage the containers. The use of containers offers higher performance than virtualization because there is no hypervisor overhead. IaaS clouds often offer additional resources such as a virtual-machine disk-image library, raw block storage, file or object storage, firewalls, load balancers, IP addresses, virtual local area networks (VLANs), and software bundles.PaaS vendors offer a development environment to application developers. The provider typically develops toolkit and standards for development and channels for distribution and payment. In the PaaS models, cloud providers deliver a computing platform, typically including an operating system, programming-language execution environment, database, and the web server. Application developers develop and run their software on a cloud platform instead of directly buying and managing the underlying hardware and software layers. With some PaaS, the underlying computer and storage resources scale automatically to match application demand so that the cloud user does not have to allocate resources manually Sure, heres a large block of text:Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Etiam eget eros at lacus volutpat tincidunt. Integer tincidunt nisi a ligula condimentum, at vehicula lacus efficitur. Sed interdum, metus in scelerisque venenatis, est ipsum tincidunt nisi, quis bibendum sem turpis ac erat. Nam ut ligula nec metus facilisis efficitur a ac nulla. Quisque sit amet magna ac lacus molestie condimentum ac at risus. Vestibulum ut dapibus risus, ac bibendum erat. Ut nec mi nec tortor vehicula ullamcorper in at erat.Curabitur quis varius orci. Morbi eget sem orci. Aenean fringilla facilisis libero, id viverra metus ullamcorper ac. Praesent ut suscipit urna, sit amet venenatis lorem. Proin tincidunt sapien turpis, sed fringilla felis efficitur nec. Sed auctor velit sit amet orci ullamcorper, eget aliquam nisi scelerisque. Vestibulum vulputate tincidunt sapien vel pretium.Suspendisse potenti. Nulla facilisi. Sed sagittis condimentum lectus, id egestas nisl ultricies id. Donec luctus ornare ligula at imperdiet. In sit amet turpis pharetra, consectetur est at, ultricies mauris. Aenean lobortis purus non nisl laoreet tincidunt. Integer sed fermentum lectus. Cras tincidunt leo vitae nisi ultrices, in dictum nulla tincidunt. Curabitur vel tortor quis purus convallis venenatis a at augue. Nam a orci at eros tristique finibus. Vivamus sagittis, nisi sed porttitor consequat, nulla leo fermentum nisl, vel vehicula ex risus et arcu.Pellentesque feugiat urna id neque vehicula, sit amet aliquet leo auctor. Donec vulputate, metus at eleifend vulputate, magna sapien dignissim lacus, ut placerat justo quam sit amet mauris. Nam non ex ligula. Fusce sollicitudin justo in leo luctus, nec elementum ligula tincidunt. Phasellus sed nibh felis. Fusce et risus id libero sollicitudin consequat. Duis a fermentum odio, at gravida ligula. Integer tincidunt ex ac turpis cursus, at tincidunt nunc dapibus. Etiam fermentum magna a augue pharetra, non interdum justo consequat. Nulla nec odio sit amet est condimentum fermentum. Quisque auctor turpis non ante viverra, ut tincidunt sapien vulputate.Nulla interdum quam et mauris auctor, quis consectetur nisl congue. Praesent non mauris quam. Integer ut elit nec orci feugiat gravida. Mauris non nisl et ipsum dap',);
 const textArray = [
    'Type this text as fast as you can! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic corrupti quas dolores exercitationem adipisci aperiam in eum. Quidem eaque amet laboriosam harum eveniet reiciendis, sed quibusdam facere porro eum numquam.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa sint provident exercitationem ad consequatur voluptates et totam illo dolores cupiditate! sit amet consectetur adipisicing elit. Hic corrupti quas dolores exercitationem adipisci aperiam in eum. Quidem eaque amet laboriosam harum eveniet reiciendis, sed quibusdam facere porro eum numquam.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa sint provident exercitationem ad consequatur voluptates et totam illo dolores cupiditate! Infrastructure as a service (IaaS) refers to online services that provide high-level APIs used to abstract various low-level details of underlying network infrastructure like physical computing resources, location, data partitioning, scaling, security, backup, etc. A hypervisor runs the virtual machines as guests. Pools of hypervisors within the cloud operational system can support large numbers of virtual machines and the ability to scale services up and down according to customers varying requirements. Linux containers run in isolated partitions of a single Linux kernel running directly on the physical hardware. Linux cgroups and namespaces are the underlying Linux kernel technologies used to isolate, secure and manage the containers. The use of containers offers higher performance than virtualization because there is no hypervisor overhead. IaaS clouds often offer additional resources such as a virtual-machine disk-image library, raw block storage, file or object storage, firewalls, load balancers, IP addresses, virtual local area networks (VLANs), and software bundles.PaaS vendors offer a development environment to application developers. The provider typically develops toolkit and standards for development and channels for distribution and payment. In the PaaS models, cloud providers deliver a computing platform, typically including an operating system, programming-language execution environment, database, and the web server. Application developers develop and run their software on a cloud platform instead of directly buying and managing the underlying hardware and software layers. With some PaaS, the underlying computer and storage resources scale automatically to match application demand so that the cloud user does not have to allocate resources manually Sure, heres a large block of text:Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Etiam eget eros at lacus volutpat tincidunt. Integer tincidunt nisi a ligula condimentum, at vehicula lacus efficitur. Sed interdum, metus in scelerisque venenatis, est ipsum tincidunt nisi, quis bibendum sem turpis ac erat. Nam ut ligula nec metus facilisis efficitur a ac nulla. Quisque sit amet magna ac lacus molestie condimentum ac at risus. Vestibulum ut dapibus risus, ac bibendum erat. Ut nec mi nec tortor vehicula ullamcorper in at erat.Curabitur quis varius orci. Morbi eget sem orci. Aenean fringilla facilisis libero, id viverra metus ullamcorper ac. Praesent ut suscipit urna, sit amet venenatis lorem. Proin tincidunt sapien turpis, sed fringilla felis efficitur nec. Sed auctor velit sit amet orci ullamcorper, eget aliquam nisi scelerisque. Vestibulum vulputate tincidunt sapien vel pretium.Suspendisse potenti. Nulla facilisi. Sed sagittis condimentum lectus, id egestas nisl ultricies id. Donec luctus ornare ligula at imperdiet. In sit amet turpis pharetra, consectetur est at, ultricies mauris. Aenean lobortis purus non nisl laoreet tincidunt. Integer sed fermentum lectus. Cras tincidunt leo vitae nisi ultrices, in dictum nulla tincidunt. Curabitur vel tortor quis purus convallis venenatis a at augue. Nam a orci at eros tristique finibus. Vivamus sagittis, nisi sed porttitor consequat, nulla leo fermentum nisl, vel vehicula ex risus et arcu.Pellentesque feugiat urna id neque vehicula, sit amet aliquet leo auctor. Donec vulputate, metus at eleifend vulputate, magna sapien dignissim lacus, ut placerat justo quam sit amet mauris. Nam non ex ligula. Fusce sollicitudin justo in leo luctus, nec elementum ligula tincidunt. Phasellus sed nibh felis. Fusce et risus id libero sollicitudin consequat. Duis a fermentum odio, at gravida ligula. Integer tincidunt ex ac turpis cursus, at tincidunt nunc dapibus. Etiam fermentum magna a augue pharetra, non interdum justo consequat. Nulla nec odio sit amet est condimentum fermentum. Quisque auctor turpis non ante viverra, ut tincidunt sapien vulputate.Nulla interdum quam et mauris auctor, quis consectetur nisl congue. Praesent non mauris quam. Integer ut elit nec orci feugiat gravida. Mauris non nisl et ipsum dap',
    'A quantum computer is a computer that exploits quantum mechanical phenomena. On small scales, physical matter exhibits properties of both particles and waves, and quantum computing leverages this behavior using specialized hardware. Classical physics cannot explain the operation of these quantum devices, and a scalable quantum computer could perform some calculations exponentially faster than any modern "classical" computer. In particular, a large-scale quantum computer could break widely used encryption schemes and aid physicists in performing physical simulations; however, the current state of the art is largely experimental and impractical, with several obstacles to useful applications.The basic unit of information in quantum computing, the qubit (or "quantum bit"), serves the same function as the bit in classical computing. However, unlike a classical bit, which can be in one of two states (a binary), a qubit can exist in a superposition of its two basis states, which loosely means that it is in both states simultaneously. When measuring a qubit, the result is a probabilistic output of a classical bit. If a quantum computer manipulates the qubit in a particular way, wave interference effects can amplify the desired measurement results. The design of quantum algorithms involves creating procedures that allow a quantum computer to perform calculations efficiently and quickly.Physically engineering high-quality qubits has proven challenging. If a physical qubit is not sufficiently isolated from its environment, it suffers from quantum decoherence, introducing noise into calculations. National governments have invested heavily in experimental research that aims to develop scalable qubits with longer coherence times and lower error rates. Two of the most promising technologies are superconductors (which isolate an electrical current by eliminating electrical resistance) and ion traps (which confine a single atomic particle using electromagnetic fields).In principle, a classical computer can solve the same computational problems as a quantum computer, given enough time. Quantum advantage comes in the form of time complexity rather than computability, and quantum complexity theory shows that some quantum algorithms are exponentially more efficient than the best known classical algorithms. A large-scale quantum computer could in theory solve computational problems unsolvable by a classical computer in any reasonable amount of time. While claims of such quantum supremacy have drawn significant attention to the discipline, near-term practical use cases remain limited.History involved when signing on to a cloud service (persons sometimes do not read the many pages of the terms of service agreement, and just click Accept without reading). This is important now that cloud computing is common and required for some services to work, for example for an intelligent personal assistant (Apples Siri or Google Assistant). Fundamentally, private cloud is seen as more secure with higher levels of control for the owner, however public cloud is seen to be more flexible and requires less time and money investment from the user.The attacks that can be made on cloud computing systems include man-in-the middle attacks, phishing attacks, authentication attacks, and malware attacks. One of the largest threats is considered to be malware attacks, such as Trojan horses. Recent research conducted in 2022 has revealed that the Trojan horse injection method is a serious problem with harmful impacts on cloud computing systems.',
    'Cloud computing poses privacy concerns because the service provider can access the data that is in the cloud at any time. It could accidentally or deliberately alter or delete information.[40] Many cloud providers can share information with third parties if necessary for purposes of law and order without a warrant. That is permitted in their privacy policies, which users must agree to before they start using cloud services. Solutions to privacy include policy and legislation as well as end-users choices for how data is stored.[40] Users can encrypt data that is processed or stored within the cloud to prevent unauthorized access.[40] Identity management systems can also provide practical solutions to privacy concerns in cloud computing. These systems distinguish between authorized and unauthorized users and determine the amount of data that is accessible to each entity.[41] The systems work by creating and describing identities, recording activities, and getting rid of unused identities.According to the Cloud Security Alliance, the top three threats in the cloud are Insecure Interfaces and APIs, Data Loss & Leakage, and Hardware Failure—which accounted for 29%, 25% and 10% of all cloud security outages respectively. Together, these form shared technology vulnerabilities. In a cloud provider platform being shared by different users, there may be a possibility that information belonging to different customers resides on the same data server. Additionally, Eugene Schultz, chief technology officer at Emagined Security, said that hackers are spending substantial time and effort looking for ways to penetrate the cloud. There are some real Achilles heels in the cloud infrastructure that are making big holes for the bad guys to get into. Because data from hundreds or thousands of companies can be stored on large cloud servers, hackers can theoretically gain control of huge stores of information through a single attack—a process he called hyperjacking. Some examples of this include the Dropbox security breach, and iCloud 2014 leak.[42] Dropbox had been breached in October 2014, having over seven million of its users passwords stolen by hackers in an effort to get monetary value from it by Bitcoins (BTC). By having these passwords, they are able to read private data as well as have this data be indexed by search engines (making the information public).There is the problem of legal ownership of the data (If a user stores some data in the cloud, can the cloud provider profit from it?). Many Terms of Service agreements are silent on the question of ownership. Physical control of the computer equipment (private cloud) is more secure than having the equipment off-site and under someone elses control (public cloud). This delivers great incentive to public cloud computing service providers to prioritize building and maintaining strong management of secure services. Some small businesses that do not have expertise in IT security could find that it is more secure for them to use a public cloud. There is the risk that end users do not understand the issues involved when signing on to a cloud service (persons sometimes do not read the many pages of the terms of service agreement, and just click Accept without reading). This is important now that cloud computing is common and required for some services to work, for example for an intelligent personal assistant (Apples Siri or Google Assistant). Fundamentally, private cloud is seen as more secure with higher levels of control for the owner, however public cloud is seen to be more flexible and requires less time and money investment from the user.The attacks that can be made on cloud computing systems include man-in-the middle attacks, phishing attacks, authentication attacks, and malware attacks. One of the largest threats is considered to be malware attacks, such as Trojan horses. Recent research conducted in 2022 has revealed that the Trojan horse injection method is a serious problem with harmful impacts on cloud computing systems.' ,
    'A computer is a machine that can be programmed to automatically carry out sequences of arithmetic or logical operations (computation). Modern digital electronic computers can perform generic sets of operations known as programs. These programs enable computers to perform a wide range of tasks. The term computer system may refer to a nominally complete computer that includes the hardware, operating system, software, and peripheral equipment needed and used for full operation; or to a group of computers that are linked and function together, such as a computer network or computer cluster.A broad range of industrial and consumer products use computers as control systems, including simple special-purpose devices like microwave ovens and remote controls, and factory devices like industrial robots. Computers are at the core of general-purpose devices such as personal computers and mobile devices such as smartphones. Computers power the Internet, which links billions of computers and users.Early computers were meant to be used only for calculations. Simple manual instruments like the abacus have aided people in doing calculations since ancient times. Early in the Industrial Revolution, some mechanical devices were built to automate long, tedious tasks, such as guiding patterns for looms. More sophisticated electrical machines did specialized analog calculations in the early 20th century. The first digital electronic calculating machines were developed during World War II, both electromechanical and using thermionic valves. The first semiconductor transistors in the late 1940s were followed by the silicon-based MOSFET (MOS transistor) and monolithic integrated circuit chip technologies in the late 1950s, leading to the microprocessor and the microcomputer revolution in the 1970s. The speed, power, and versatility of computers have been increasing dramatically ever since then, with transistor counts increasing at a rapid pace (Moores law noted that counts doubled every two years), leading to the Digital Revolution during the late 20th and early 21st centuries.Conventionally, a modern computer consists of at least one processing element, typically a central processing unit (CPU) in the form of a microprocessor, together with some type of computer memory, typically semiconductor memory chips. The processing element carries out arithmetic and logical operations, and a sequencing and control unit can change the order of operations in response to stored information. Peripheral devices include input devices (keyboards, mice, joystick, etc.), output devices (monitor screens, printers, etc.), and input/output devices that perform both functions (e.g., the 2000s-era touchscreen). Peripheral devices allow information to be retrieved from an external source, and they enable the results of operations to be saved and retrieved.During the first half of the 20th century, many scientific computing needs were met by increasingly sophisticated analog computers, which used a direct mechanical or electrical model of the problem as a basis for computation. However, these were not programmable and generally lacked the versatility and accuracy of modern digital computers.[34] The first modern analog computer was a tide-predicting machine, invented by Sir William Thomson (later to become Lord Kelvin) in 1872. The differential analyser, a mechanical analog computer designed to solve differential equations by integration using wheel-and-disc mechanisms, was conceptualized in 1876 by James Thomson, the elder brother of the more famous Sir William Thomson. The art of mechanical analog computing reached its zenith with the differential analyzer, built by H. L. Hazen and Vannevar Bush at MIT starting in 1927. This built on the mechanical integrators of James Thomson and the torque amplifiers invented by H. W. Nieman. A dozen of these devices were built before their obsolescence became obvious. By the 1950s, the success of digital electronic computers had spelled the end for most analog computing machines, but analog computers remained in use during the 1950s in some specialized applications such as education (slide rule) and aircraft (control systems).'
 ]


  // getting time from local storage
  const testTime = localStorage.getItem('testTime')
  console.log(testTime)

  const [time, setTime] = useState(testTime); // 1 minute = 60 seconds
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [key, setKey] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyPress = (event) => {
      const allowedKeys = /^[a-zA-Z0-9!@#$%^&*(),.?":{}|<> ]$/;
      if (event.key.match(allowedKeys)) {
        setIsRunning(true);
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  useEffect(() => {
    if (isRunning && time > 0) {
      const timer = setTimeout(() => setTime(time - 1), 1000);
      const progress = ((testTime - time) / testTime) * 100
      setProgress(progress)
      return () => clearTimeout(timer);
    }
    else if (time === 0) {
      navigate("/typingresult");
    }
  }, [isRunning, time]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };


  // select random text
  function getRandomText(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    setTestText(arr[randomIndex])
    return arr[randomIndex];
  }
  useEffect(()=>{
    getRandomText(textArray)
  },[])
  
  
  // restart test
  const restartTest = () => {
    setTime(testTime)
    setProgress(0)
    setKey(prevKey => prevKey + 1);
    localStorage.setItem('correct', 0);
    localStorage.setItem('incorrect', 0);
    localStorage.setItem('wordLetterIndex', JSON.stringify([{"word" : 0, "letter" : 0}]));
  }


  useEffect(()=>{
    if (document.getElementById('setting-toggle-btn1').checked){
      localStorage.setItem('checked_btn1',1)
    }else{
      localStorage.setItem('checked_btn1',0)
    }
    if (document.getElementById('setting-toggle-btn2').checked){
      localStorage.setItem('checked_btn2',1)
    }else{
      localStorage.setItem('checked_btn2',0)
    }
  })




  return (
    <>
      <div className="App">
        <div className="typing-test-header">
          <div className="typing-test-heading">Typin.com</div>
          <div className="typing-test-type">{testTime / 60} Minute Typing Test</div>
          <div className="typing-test-feature">
            <div className="typing-timer">{formatTime(time)}</div>
            <div className="typing-setting-icons">
              <div><FontAwesomeIcon icon={faClockRotateLeft} onClick={() => { restartTest() }}  className='typing-setting-icon-btn'/></div>
              <div><FontAwesomeIcon icon={faVolumeHigh} data-bs-toggle="modal" data-bs-target="#exampleModal" className='typing-setting-icon-btn'></FontAwesomeIcon></div>
              {/* <div><FontAwesomeIcon icon={faVideoSlash} className='typing-setting-icon-btn'/></div> */}
            </div>
          </div>
        </div>
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        <div className='typing-testing-box'>
          <Typetest key={key} testText={testText} />
        </div>
      </div>

      {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> */}
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Sound Settings</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div className="type-sound-setting">
                <div className="typing-sound-title">Type Sound</div>
                <div className="sound-setting-toggle-btn">
                  <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" id="setting-toggle-btn1"   defaultChecked />
                    <label class="form-check-label" for="setting-toggle-btn1"></label>
                  </div>
                </div>
              </div>
              <div className="type-sound-setting">
                <div className="error-sound-title">Error Sound</div>
                <div className="sound-setting-toggle-btn">
                  <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" id="setting-toggle-btn2" defaultChecked/>
                    <label class="form-check-label" for="setting-toggle-btn2"></label>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
              <button type="button" class="btn btn-primary">Save</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Typebox;
