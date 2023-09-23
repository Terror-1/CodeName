function replaceTextInTable() {
  const html = `<option value="1155">ABSK 901: Academic Business Skills I</option><option value="1156">ABSK 902: Academic Business Skills II</option><option value="13">AE 101: Introduction to Academic English (B)</option><option value="1786">ARCH  702: Legislation, Professional Practice and contracts</option><option value="1417">ARCH 101: Freehand Drawing and Modelling</option><option value="1418">ARCH 102: Descriptive Geometry</option><option value="1419">ARCH 103: Fundamentals of Building Technology (Building Physics and Building Structures)</option><option value="2683">ARCH 1036: Research Methods in Architecture &amp; Urbanism</option><option value="1503">ARCH 104: Architectural Drawing</option><option value="1548">ARCH 301: History of Architecture II</option><option value="1549">ARCH 302: CAAD / CAM I</option><option value="1551">ARCH 304: Building Technology II</option><option value="1553">ARCH 305: Design Studio I</option><option value="1559">ARCH 306: Structural Analysis</option><option value="1614">ARCH 403: Introduction to Urban Design</option><option value="1623">ARCH 501: CAAD/CAM III</option><option value="1624">ARCH 502: Steel Structure Desgin</option><option value="1625">ARCH 503: Theory of Architecture II</option><option value="1626">ARCH 504: Building Technology IV</option><option value="1628">ARCH 505: Design Studio III</option><option value="1785">ARCH 701: Ecology and Environmental Control Systems</option><option value="1787">ARCH 703: Design Studio V (Selected Urban and Architectural Design Projects)</option><option value="1858">ARCH 901: Design Studio VI - Urban Design and Landscaping</option><option value="1859">ARCH 902: Design Studio VI - Working Drawings</option><option value="1860">ARCH 903: Sustainable Urban Development</option><option value="2099">ARCH 918: Introduction to Interior Design</option><option value="2722">ARCH 940: Architecture and Film</option><option value="2724">ARCH 942: The Sound of Space</option><option value="14">AS 102: English for Academic Purposes (A1)</option><option value="383">BINF 302: Enterprise Systems I</option><option value="384">BINF 303: Information &amp; Communication Architecture I</option><option value="597">BINF 506: Research Methodology for BINF</option><option value="801">BINF 711: Information Security</option><option value="803">BINF 712: E-Business Development</option><option value="2870">BINF 713: Digital Marketing</option><option value="808">BINF 720: Seminar in Business Informatics</option><option value="2416">BIOT 512: Biomacromolecules</option><option value="899">BIOT 751: Radionuclides</option><option value="900">BIOT 861: Industrial Biotechnology</option><option value="2554">BIOTp 504: Botanical, Zoological &amp; Marine Excursion</option><option value="2560">BIOTp 505: Physical Chemistry II</option><option value="2563">BIOTp 522: Biochemistry</option><option value="2562">BIOTp 712: Microbiology II</option><option value="2561">BIOTp 733: Genetics and Genetic Engineering II</option><option value="2564">BIOTp 791: Biotechnology II</option><option value="2556">BIOTt 505: Physical Chemistry II</option><option value="2555">BIOTt 522: Biochemistry</option><option value="2558">BIOTt 712: Microbiology II</option><option value="2557">BIOTt 733: Genetics and Genetic Engineering II</option><option value="2559">BIOTt 791: Biotechnology II</option><option value="1861">BTECH 901: Design Studio VI - Architecture</option><option value="1862">BTECH 902: Design Studio VI - Working Drawings</option><option value="1863">BTECH 903: Sustainable Building</option><option value="2799">BTECH 912: Swiss Club-Active Fairytale Garden</option><option value="2800">BTECH 913: Material Untold</option><option value="2802">BTECH 914: BioTerre(Tect-Tex-Tech)</option><option value="1148">CBD 101: Digital Media I</option><option value="1183">CHEMt 102: Chemistry</option><option value="2340">CICO 501: Drafting of contracts and law suit</option><option value="1808">CIG  702: Construction Management II</option><option value="1797">CIG  703: Water and Wastewater Treatment</option><option value="1807">CIG  704: Heavy Civil Construction</option><option value="1850">CIG  903: Topics in Architectural Engineering</option><option value="1853">CIG  904: Performance and Cost</option><option value="1907">CIG 1009: Advanced Topics in Civil Engineering</option><option value="1605">CIG 302: Building Engineering Drawing</option><option value="1607">CIG 502: Engineering Surveying</option><option value="1643">CIG 701: Geodetic and Satellite Surveying</option><option value="1840">CIG 901: Construction Contracts and Project Administration</option><option value="2030">CILA 101: Introduction to Law. (Theory of Legal Rights - Theory of Law)</option><option value="2083">CILA 201: Civil Law (Law of Contract)</option><option value="2176">CILA 302: Personal Status matters for non-Muslims</option><option value="2177">CILA 303: Legal Research (Course II)</option><option value="2179">CILA 305: Civil Obligations</option><option value="2181">CILA 306: Evidence Law</option><option value="2183">CILA 307: Law of Evidence</option><option value="2341">CILA 308: Civil law (Tort &amp; Unjust Enrichment)</option><option value="2335">CILA 501: Labor Law</option><option value="2336">CILA 502: Civil law (Contracts of sale, Lease and Insurance)</option><option value="1805">CIS  303: Structural Analysis I</option><option value="1556">CIS 301: Properties and Testing of Materials I</option><option value="1638">CIS 501: Introduction to Geotechnical Engineering</option><option value="1639">CIS 502: Structural Analysis III</option><option value="1604">CIS 503: Design of Reinforced Concrete Structures I</option><option value="1641">CIS 504: Steel Structures Design I</option><option value="1801">CIS 702: Prestressed Concrete Design</option><option value="1652">CIS 703: Design of Reinforced Concrete Structures III</option><option value="1804">CIS 705: Bridge Engineering Design</option><option value="1841">CIS 901: Structural Dynamics</option><option value="1800">CIS 902: Advanced Geotechnical and Foundation Engineering</option><option value="1802">CIS 904: Steel Structures Design III</option><option value="1855">CIS 907: Earthquake-Resistant Design</option><option value="1796">CIT  701: Road and Pavement Design</option><option value="1642">CIT 502: Traffic Engineering I</option><option value="1737">CIT 901: Civil Aviation and Airport Planning and Design</option><option value="1798">CIW  702: Irrigation and Drainage Engineering</option><option value="1606">CIW 501: Introduction to Hydrology</option><option value="1636">CIW 701: Drinking Water and Sanitary Engineering</option><option value="2157">CLPH 911: Clinical Pharmacy Practice I</option><option value="2884">CLPHp 911: Clinical Pharmacy Practice II</option><option value="2892">CLPHp 940: Clinical Pharmacokinetics</option><option value="2886">CLPHp 943: Drug Information and Evidence Based Medicine</option><option value="2888">CLPHp 951: Community pharmacy practice and Hospital Pharmacy</option><option value="2883">CLPHt 911: Clinical Pharmacy Practice II</option><option value="2891">CLPHt 940: Clinical Pharmacokinetics</option><option value="2885">CLPHt 943: Drug Information and Evidence Based Medicine</option><option value="2887">CLPHt 951: Community pharmacy practice and Hospital Pharmacy</option><option value="2035">CMLA 102: General Principles of Human Rights</option><option value="2080">CMLA 202: The constitutional Law</option><option value="2404">CMLA 701: Administrative Contracts</option><option value="2337">COLA 501: Commercial Law</option><option value="2338">COLA 502: International business transactions</option><option value="2401">COLA 701: Maritime and Air Law</option><option value="117">COMM 501: System &amp; Control</option><option value="354">COMM 502: Communication Theory</option><option value="294">COMM 701: Wave Distributions</option><option value="295">COMM 702: Modulation II</option><option value="296">COMM 703: Communications Lab</option><option value="586">COMM 704: Communication Systems</option><option value="579">COMM 901: Source Coding and Compression</option><option value="580">COMM 903: Microwave Technology</option><option value="2718">COMM 904: Evolution of Mobile Networks</option><option value="582">COMM 905: Advanced Communication Lab</option><option value="101">CPS 402: Communication &amp; Presentation Skills (A2)</option><option value="2339">CRLA 501: Criminal Law (Special Rules)</option><option value="2405">CRLA 701: Law of Criminal Procedures</option><option value="350">CSEN 102: Introduction to computer science</option><option value="1577">CSEN 1022: Machine Learning</option><option value="2390">CSEN 1095: Data Engineering</option><option value="2391">CSEN 1096: Business Of Software</option><option value="2571">CSEN 1104: Advanced Topics in IT Security</option><option value="2602">CSEN 1114: Mobile Application Development</option><option value="2721">CSEN 1121: Computational Intelligence and Neural Networks</option><option value="351">CSEN 301: Data structures and Algorithms</option><option value="126">CSEN 501: Data Base I</option><option value="127">CSEN 502: Theory of Computation</option><option value="411">CSEN 503: Introduction To Communication Networks</option><option value="600">CSEN 507: Theory of Computation for BINF</option><option value="429">CSEN 605: Digital System Design</option><option value="313">CSEN 701: Embedded System Architecture</option><option value="315">CSEN 702: Microprocessors</option><option value="314">CSEN 703: Analysis and Design of Algorithms</option><option value="316">CSEN 704: Advanced Computer lab</option><option value="547">CSEN 707: Analysis and Design of Algorithms</option><option value="572">CSEN 901: Artificial Intelligence</option><option value="573">CSEN 903: Advanced Computer lab</option><option value="795">CSEN 909: Human Computer Interaction</option><option value="796">CSEN 911: Data Mining</option><option value="2875">CSEN 933: Artificial Intelligence</option><option value="2036">CSIS  105: Introduction to Computer Science</option><option value="5">CSIS 101: Introduction to Computer Science I</option><option value="1969">CSIS 102: Introduction to Computer Science</option><option value="397">CSIS 104: Introduction to computer science</option><option value="386">CSIS 301: Data Structures &amp; Algorithms</option><option value="77">CSIS 402: Computer Organization and System Programming</option><option value="8">CTRL 101: Financial Accounting I</option><option value="1877">CTRL 1901: Advanced Accounting</option><option value="58">CTRL 301: Management Accounting I</option><option value="135">CTRL 505: Auditing</option><option value="219">CTRL 703: Planning &amp; Budgeting</option><option value="221">CTRL 705: Seminar in Management Control</option><option value="1767">CTRL 708: Financial Reporting and Analysis</option><option value="1703">CTRL 710: Cost Accounting</option><option value="1957">CTRL 711: Financial &amp; Management Control Systems</option><option value="1958">CTRL 713: Intermediate Accounting I</option><option value="286">CTRL 720: Seminar in Accounting (1st Major seminar)</option><option value="37">CTRL 901: Advanced Accounting</option><option value="209">DD 101: Visual Techniques</option><option value="15">DE 101: Basic German 1</option><option value="33">DE 202: Basic German 2</option><option value="64">DE 303: Basic German 3</option><option value="73">DE 404: Basic German 4</option><option value="125">DMET 501: Introduction to media Engineering</option><option value="312">DMET 502: Computer Graphics</option><option value="404">DMET 702: Visualization and Animation</option><option value="317">DMET 703: Video and Audio Technology</option><option value="318">DMET 704: Multimedia and Networking</option><option value="319">DMET 706: Advanced Media Lab</option><option value="571">DMET 901: Computer Vision</option><option value="574">DMET 902: Advanced Video Processing</option><option value="575">DMET 904: Advanced Media Lab</option><option value="7">ECON 101: Introduction to Economics</option><option value="1878">ECON 1901: Business Economics</option><option value="30">ECON 302: Microeconomics</option><option value="136">ECON 504: Economic Development</option><option value="265">ECON 711: Microtheory</option><option value="266">ECON 712: Macrotheory</option><option value="267">ECON 720: Seminar in Economics (1st Major seminar)</option><option value="38">ECON 901: Business Economics</option><option value="747">EDPT 1009: Robotics</option><option value="1515">EDPT 1016: Advanced CNC Programming</option><option value="432">EDPT 201: Production Technology</option><option value="598">EDPT 302: Introduction to Materials and Manufacturing Processes</option><option value="322">EDPT 401: CAD- Lab</option><option value="392">EDPT 501: Engineering design I</option><option value="700">EDPT 502: Casting Metallurgy and Processes</option><option value="703">EDPT 701: Welding and Joining Metallurgy and Processes</option><option value="323">EDPT 702: Welding and Joining Technology</option><option value="325">EDPT 703: Production Engineering</option><option value="701">EDPT 704: Technical measurements</option><option value="702">EDPT 705: Engineering Economy</option><option value="704">EDPT 706: Theory of Metal Forming</option><option value="705">EDPT 901: Non conventional Manufacturing Processes</option><option value="569">EDPT 902: Computer Aided Design/ Computer Aided Manufacturing (CAD/CAM)</option><option value="570">EDPT 903: Machine Design</option><option value="706">EDPT 904: Production and Operation Management</option><option value="707">EDPT 905: Quality Control</option><option value="708">EDPT 906: Machine Tool Design</option><option value="1223">EDPT 909: Plastics Die and Mold Design</option><option value="2399">ELCT 1017: Embedded C programming for ARM microcontrollers</option><option value="2794">ELCT 1021: Cosmetic Technology</option><option value="2795">ELCT 1041: Clinical Nutrition</option><option value="2796">ELCT 1051: Applied Toxicology</option><option value="2797">ELCT 1111: Pharmacogenomics and Pharmacogenetics</option><option value="20">ELCT 301: Electrical Circuits I</option><option value="122">ELCT 501: Digital System Design</option><option value="356">ELCT 503: Semiconductors</option><option value="355">ELCT 508: Communication Microelectronics</option><option value="188">ELCT 601: Optical Materials and Devices</option><option value="306">ELCT 701: Integrated Circuits Design</option><option value="307">ELCT 703: Microelectronics</option><option value="308">ELCT 704: Power Electronics</option><option value="309">ELCT 705: Semiconductor Technology</option><option value="311">ELCT 707: Microcomputer Applications</option><option value="723">ELCT 708: Electric Machines</option><option value="596">ELCT 708: Microelectronics Lab II</option><option value="581">ELCT 901: Photonics</option><option value="583">ELCT 902: Programmable Logic Circuits</option><option value="559">ELCT 903: Sensor Technology</option><option value="584">ELCT 904: Very Large Scale Integration</option><option value="585">ELCT 905: Advanced Microelectronics Lab</option><option value="418">ELECp 701: Electronics</option><option value="417">ELECt 701: Electronics</option><option value="49">ENGD 301: Engineering Drawing &amp; Design</option><option value="687">ENME 1010: Turbomachinery</option><option value="400">ENME 302: Mechanics I</option><option value="391">ENME 501: Strength of materials II</option><option value="198">ENME 503: Control Engineering</option><option value="696">ENME 504: Mechanics of Machines</option><option value="698">ENME 505: Engineering Thermodynamics</option><option value="451">ENME 601: Fluid Mechanics</option><option value="324">ENME 701: Finite Elements</option><option value="567">ENME 902: Vibrations of Structures</option><option value="1882">FINC 1901: Corporate Finance</option><option value="2613">FINC 2101: Advanced Topics in Accounting </option><option value="2625">FINC 2201: Financial Markets &amp; Institutions </option><option value="2615">FINC 2301: Advanced Topics in Finance</option><option value="2624">FINC 2302: Contemporary Issues in Finance</option><option value="2620">FINC 2401: Financial Analysis &amp; Security Valuation</option><option value="2629">FINC 2500: Finance Comprehensive Exam</option><option value="134">FINC 504: Corporate Finance</option><option value="758">FINC 505: Corporate Finance for Business Informatics</option><option value="212">FINC 704: Advanced Corporate Finance</option><option value="214">FINC 705: Finance Seminar</option><option value="1960">FINC 711: Advanced Corporate Finance</option><option value="473">FINC 712: Portfolio Management and Investment Analysis</option><option value="273">FINC 720: Seminar in Finance (1st Major seminar)</option><option value="215">FINC 802: International Finance</option><option value="67">FINC 901: Corporate Finance</option><option value="208">GD 101: Visual Communication (basic)</option><option value="516">GD 301: Typography</option><option value="1127">GD 501: Corporate Design</option><option value="1128">GD 502: Illustration</option><option value="1129">GD 503: Font Design I (Latin)</option><option value="1130">GD 504: Lay out</option><option value="1200">GD 612: Visual Information</option><option value="1531">GD 706: Global Communication II</option><option value="1532">GD 707: Interaction Design II</option><option value="809">GMAT 901: Management Aptitude Exam Preparation Course</option><option value="1153">GMAT 902: Management Aptitude Enhancement- Verbal</option><option value="1154">GMAT 903: Management Aptitude Enhancement- Quantitative</option><option value="1880">HROB 1901: Introduction to Human Resource Management</option><option value="133">HROB 502: Organizational Behavior</option><option value="224">HROB 701: Leadership &amp; Motivation</option><option value="226">HROB 703: Organizational Change</option><option value="228">HROB 705: Seminar In Human Resources &amp; Organizational Behavior</option><option value="277">HROB 711: Leadership &amp; Motivation</option><option value="269">HROB 712: Organizational Change</option><option value="278">HROB 720: Seminar in Human Resources (1st Major seminar)</option><option value="40">HROB 901: Introduction to Human Resource Management</option><option value="2553">HUMA 315: Psychology</option><option value="1837">HUMA 701: Engineering Economics, Ethics, and Legislation</option><option value="611">HUMA 901: Legislation, Contracts and Engineering Ethics</option><option value="230">IBUS 701: International Business</option><option value="251">IBUS 702: Economic Development &amp; Development Economics</option><option value="233">IBUS 705: Seminar in International Business</option><option value="282">IBUS 711: Transnational Management</option><option value="482">IBUS 712: International Business Policy</option><option value="283">IBUS 720: Seminar in International Business (1st Major seminar)</option><option value="1879">INNO 1901: Entrepreneurship</option><option value="249">INNO 705: Seminar In Innovation &amp; Technology Management</option><option value="253">INNO 706: Innovation Project Management</option><option value="1979">INNO 711: Entrepreneurship</option><option value="766">INNO 713: Product &amp; Process Innovation</option><option value="767">INNO 720: Seminar in Innovation (1st Major seminar)</option><option value="39">INNO 901: Entrepreneurship</option><option value="59">INSY 301: Information Systems I</option><option value="238">INSY 705: Seminar in Information Systems</option><option value="239">INSY 706: IS Project Management</option><option value="2716">INSY 708: Digital Transformation</option><option value="279">INSY 711: Information Management</option><option value="280">INSY 713: Business Intelligence</option><option value="281">INSY 720: Seminar in Information Systems (1st Major seminar)</option><option value="2178">ISSH 304: Islamic Sharia-Family Law</option><option value="2400">ISSH 701: Islamic Sharia (Islamic Jurisprudence)</option><option value="2395">LAW 701: Competition Law/Anti-Trust</option><option value="2408">LAW 704: Research Seminar</option><option value="2409">LAW 705: Bachelor seminar</option><option value="2539">LAW 706: International Criminal Law</option><option value="56">LAWS 302: Business Law</option><option value="6">MATH 101: Mathematics &amp; Statistics I</option><option value="2">MATH 103: Maths</option><option value="145">MATH 104: Mathematics &amp; Statistics</option><option value="2029">MATH 105: Math I</option><option value="1420">MATH 106: Mathematics</option><option value="45">MATH 301: Mathematics III</option><option value="1635">MATH 302: Mathematics and Numerical Computations for Civil Engineering</option><option value="385">MATH 305: Mathematics for Business Informatics III</option><option value="124">MATH 501: Mathematics V (Discrete Math)</option><option value="116">MATH 502: Mathematics V (Numerical methods &amp; Discrete Math)</option><option value="36">MATH 901: Math &amp; Statistics</option><option value="2097">MATS  916: Fiber reinforced composites: Materials, processing, Mechanics and Testing</option><option value="50">MATS 301: Introduction to Material Science</option><option value="590">MATS 501: Introduction to Polymers</option><option value="591">MATS 502: Thermodynamics</option><option value="464">MATS 503: Materials Selection in Design</option><option value="699">MATS 504: Materials Engineering II: Non Metallic Materials</option><option value="321">MATS 702: Materials Analysis and Application</option><option value="589">MATS 703: Materials lab II</option><option value="592">MATS 704: Corrosion, Damage and Wear</option><option value="587">MATS 901: Microstructure and Properties of Engineering Materials</option><option value="588">MATS 902: Design of Experiments and Measuring Techniques</option><option value="2334">MATS 917: Introduction to Nano Eng. and Nano technology</option><option value="2719">MATS 919: Advanced Additive Manufacturing Technologies</option><option value="1524">MCTR  906: Heating, Ventilation and Air Conditioning (HVAC) Systems and Control</option><option value="1525">MCTR  907: Electro-Hydraulics</option><option value="2505">MCTR 1021: Optimization Techniques for Multi-Cooperative Systems</option><option value="719">MCTR 501: Engineering Thermodynamics</option><option value="724">MCTR 701: Industrial Automation</option><option value="725">MCTR 702: Modern Control Engineering</option><option value="726">MCTR 703: Pneumatic and hydraulic control</option><option value="727">MCTR 704: Mechatronics Lab</option><option value="729">MCTR 903: Advanced Mechatronics Engineering</option><option value="2793">MCTR 911: Robotics Programming</option><option value="916">MD 101: Still Image</option><option value="917">MD 301: Moving Image</option><option value="1040">MD 501: Video/ Animation(real time)</option><option value="2045">MD 502: Digital Editing</option><option value="2046">MD 503: Script, Story, Storyboard</option><option value="1137">MD 504: Video / Animation Techniques</option><option value="1138">MD 701: Hybrid Media</option><option value="1139">MD 702: Digital Compositing II</option><option value="32">MGMT 101: Introduction to Management</option><option value="2611">MGMT 2101: Advanced Multivariate Statistics</option><option value="2612">MGMT 2102: Advanced Organizational Behavior </option><option value="2616">MGMT 2201: Industry 4.0</option><option value="2622">MGMT 2202: Advanced Strategic Management</option><option value="2619">MGMT 2301: Advanced Research Methodology</option><option value="2628">MGMT 2302: Strategic Human Resource Management </option><option value="2621">MGMT 2401: Qualitative Analysis </option><option value="2626">MGMT 2402: Organizational Performance Management </option><option value="2618">MGMT 2403: Organization Design</option><option value="2738">MGMT 501: Business Ethics</option><option value="137">MGMT 502: Research Methodology</option><option value="1881">MRKT 1901: Marketing</option><option value="2614">MRKT 2201: Marketing Theory</option><option value="2617">MRKT 2202: Consumer Psychology </option><option value="2627">MRKT 2301: Services Marketing </option><option value="61">MRKT 301: Marketing I</option><option value="110">MRKT 701: Buyer Behavior</option><option value="2715">MRKT 703: Digital Marketing</option><option value="216">MRKT 705: Seminar in Marketing</option><option value="515">MRKT 709: Market Research</option><option value="274">MRKT 711: Marketing Research</option><option value="275">MRKT 712: Integrated Marketing Communication</option><option value="276">MRKT 720: Seminar in Marketing (1st Major seminar)</option><option value="66">MRKT 901: Marketing</option><option value="120">NETW 502: Communication Engineering</option><option value="121">NETW 503: Internet</option><option value="466">NETW 504: Random Signals and Noise</option><option value="552">NETW 505: Random Signals And Noise</option><option value="297">NETW 701: Wireless Communications</option><option value="298">NETW 702: Optical Fibre Communication Systems</option><option value="301">NETW 704: Signaling and Network Control</option><option value="302">NETW 705: Mobile Communication Networks</option><option value="303">NETW 706: Local Area Networks</option><option value="305">NETW 708: Network Lab</option><option value="555">NETW 709: Performance Modeling</option><option value="691">NETW 902: Internet Technology</option><option value="576">NETW 903: Network and Services</option><option value="553">NETW 904: Linear and Non-Linear Optimization</option><option value="578">NETW 905: Advanced Networks Lab</option><option value="2511">NETW 908: Data Engineering</option><option value="1883">OPER 1901: Operations Management</option><option value="60">OPER 501: Operations I</option><option value="241">OPER 702: Manufacturing Strategy</option><option value="244">OPER 705: Seminar in Operations Management</option><option value="601">OPER 711: Operations Research</option><option value="602">OPER 712: Manufacturing Strategy</option><option value="603">OPER 720: Seminar in Operations (1st Major seminar)</option><option value="1665">OPER 730: Special Topics in Operation Management</option><option value="105">OPER 901: Operations Management</option><option value="206">PD 101: Form and Material</option><option value="1140">PD 302: Semantic</option><option value="823">PD 501: Furniture Design</option><option value="824">PD 502: Industrial Products</option><option value="825">PD 503: CAD I</option><option value="1142">PD 504: Techniques of Presentation</option><option value="1143">PD 505: Usability</option><option value="1144">PD 506: Design Planning</option><option value="1036">PD 701: Mobility</option><option value="1037">PD 702: Public Design</option><option value="1038">PD 703: CAD III</option><option value="2031">PEPF 101: Introduction to Political Economics</option><option value="2149">PHBC 731: Biochemistry III (Pathobiochemistry/Pathophysiology)</option><option value="2734">PHBC 732: Biochemistry III&nbsp;</option><option value="2636">PHBCp 522: Biochemistry I</option><option value="2635">PHBCt 522: Biochemistry I</option><option value="2104">PHBL 101: Pharmaceutical Biology I</option><option value="2550">PHBLp 304: Pharmacognosy I</option><option value="2730">PHBLp 741: Phytochemistry II</option><option value="2900">PHBLp 962: Phytotherapy &amp; Biogenic Drugs</option><option value="2116">PHBLt 303: Pharmacognosy I</option><option value="2729">PHBLt 741: Phytochemistry&nbsp;II</option><option value="2881">PHBLt 962: Phytotherapy &amp; Biogenic Drugs</option><option value="2115">PHBT 311: Biotechnology I</option><option value="881">PHBT 911: Microbiology &amp; Immunology</option><option value="2639">PHBTp 533: Medical Microbiology and Immunology</option><option value="2736">PHBTp 741: Biotechnology</option><option value="2638">PHBTt 533: Medical Microbiology and Immunology</option><option value="2735">PHBTt 741: Biotechnology&nbsp;</option><option value="2103">PHCMp 101: General &amp; Inorganic Chemistry</option><option value="2547">PHCMp 332: Pharmaceutical&nbsp;Organic Chemistry I</option><option value="2417">PHCMp 561: Instrumental analysis</option><option value="2634">PHCMp 562: Instrumental analysis I</option><option value="2632">PHCMp 572: Pharmaceutical Chemistry I</option><option value="2728">PHCMp 774: Pharmaceutical Chemistry III</option><option value="2768">PHCMp 882: Drug Design</option><option value="2102">PHCMt 101: General &amp; Inorganic Chemistry</option><option value="2546">PHCMt 332: Pharmaceutical&nbsp;Organic Chemistry I</option><option value="2415">PHCMt 561: Instrumental analysis</option><option value="2633">PHCMt 562: Instrumental analysis I</option><option value="2631">PHCMt 572: Pharmaceutical Chemistry I</option><option value="2727">PHCMt 774: Pharmaceutical Chemistry III</option><option value="2637">PHMU 534: Pathophysiology</option><option value="2737">PHMU 702: First Aid&nbsp;</option><option value="2549">PHMUp 323: Physiology and Anatomy II</option><option value="2548">PHMUt 323: Physiology and Anatomy II</option><option value="2641">PHTC 523: Biopharmacy and Pharmacokinetics</option><option value="2455">PHTCp 102: Physical chemistry and Physical Pharmacy</option><option value="2552">PHTCp 312: Pharmaceutics I</option><option value="2733">PHTCp 732: Pharmaceutics III &nbsp;&nbsp;</option><option value="2890">PHTCp 934: Pharmaceutical Technology II</option><option value="532">PHTCp 934: Pharmaceutical Technology III</option><option value="2454">PHTCt 102: Physical chemistry and Physical Pharmacy</option><option value="2551">PHTCt 312: Pharmaceutics I</option><option value="2732">PHTCt 732: Pharmaceutics III &nbsp;</option><option value="2889">PHTCt 934: Pharmaceutical Technology II</option><option value="531">PHTCt 934: Pharmaceutical Technology III</option><option value="2731">PHTX 723: Pharmacology II </option><option value="141">PHYS 101: Physics</option><option value="398">PHYSp 301: Physics III (P)</option><option value="399">PHYSt 301: Physics III (t)</option><option value="1788">PMCM 701: Introduction to Project Management / Construction Management (PM/CM)</option><option value="1533">PR 901: Advanced Design Project I</option><option value="2032">PRIN 101: History of Legal and Social Systems in Egypt</option><option value="2402">PRIN 701: Private International Law (Conflict of Laws and Judicial Jurisdiction)</option><option value="2033">PUIN 101: International and Regional Organizations</option><option value="34">RPW 401: Research Paper Writing (A2)</option><option value="72">RSMD 901: Research Methodology</option><option value="16">SM 101: Scientific Methods (A1)</option><option value="1884">STRA 1901: Strategic Management</option><option value="69">STRA 701: Corporate Renewal / Change Management</option><option value="106">STRA 702: Business Dynamics</option><option value="107">STRA 703: Strategic Management</option><option value="70">STRA 704: Strategic Management Analysis</option><option value="218">STRA 705: Strategic Management Seminar</option><option value="1955">STRA 711: Business Strategy</option><option value="2880">STRA 716: Competitiveness of Nations and Industry Clusters</option><option value="270">STRA 720: Seminar in Strategic Management (1st Major seminar)</option><option value="815">TH 103: Text, Language, Commmunication</option><option value="1019">TH 301: Design History</option><option value="819">TH 302: Design Research Methods</option><option value="1149">TH 501: Brand Identity</option><option value="1150">TH 502: Social Sciences</option><option value="1033">TH 701: Media Theory</option><option value="1151">TH 702: Seminar</option><option value="1206">TH 901: Communication Strategies</option><option value="1207">TH 902: Advanced Research Methods</option><option value="1789">UP 701: Introduction to Urban Economics</option></select>`;
  const regex = /<option value="\d+">(.*?)<\/option>/g;
  const courses = new Map();
  let match;

  while ((match = regex.exec(html)) !== null) {
    const courseCode = match[1].split(':')[0];
    const courseName = match[1].split(':')[1].substring(1);
    courses.set(courseCode, courseName);
  }

  const tables = document.querySelectorAll('table');
  tables.forEach((table) => {
    const rows = table.querySelectorAll('tr');
    rows.forEach((row) => {
      const cells = row.querySelectorAll('td');
      cells.forEach((cell) => {
        let cellText = cell.textContent.trim();
        // need to find a better way for searching
        // supposed to be a regex to select only the course code in the cell in the form of ARCH 100
        for (const [key, replacement] of courses) {
          if (cellText.includes(key)) {
            cellText = cellText.replace(key, replacement);
            cell.innerHTML = cellText;
          }
        }
      });
    });
  });
}

replaceTextInTable();
