const careerDatabase = [
    {
        id: 1,
        title: "Data Scientist",
        category: "Technology",
        match: 0, // Will be calculated
        description: "Data scientists analyze and interpret complex data to help organizations make informed decisions. They use statistical techniques, machine learning, and data visualization tools.",
        salary: "$95,000 - $165,000",
        growth: "31% (Much faster than average)",
        education: "Bachelor's in Data Science, Computer Science, or related field",
        skills: ["Programming", "Data Analysis", "Statistics", "Machine Learning", "Problem Solving", "Critical Thinking"],
        interests: ["Technology", "Analytics", "Research", "Mathematics"],
        minEducation: "bachelor",
        experienceLevel: "mid",
        workEnvironment: ["office", "remote", "hybrid"],
        salaryRange: "senior"
    },
    {
        id: 2,
        title: "UX/UI Designer",
        category: "Design",
        match: 0,
        description: "UX/UI designers create engaging and intuitive user experiences for digital products. They conduct user research, design interfaces, and test usability.",
        salary: "$75,000 - $130,000",
        growth: "13% (Faster than average)",
        education: "Bachelor's in Design, HCI, or related field",
        skills: ["Design", "Creativity", "User Research", "Prototyping", "Communication", "Problem Solving"],
        interests: ["Design", "Technology", "Psychology", "Arts"],
        minEducation: "bachelor",
        experienceLevel: "mid",
        workEnvironment: ["office", "remote", "hybrid"],
        salaryRange: "mid"
    },
    {
        id: 3,
        title: "Software Engineer",
        category: "Technology",
        match: 0,
        description: "Software engineers design, develop, and maintain software applications. They work across various industries to create solutions for specific needs.",
        salary: "$85,000 - $160,000",
        growth: "22% (Much faster than average)",
        education: "Bachelor's in Computer Science or related field",
        skills: ["Programming", "Problem Solving", "Algorithms", "Software Development", "Teamwork", "Critical Thinking"],
        interests: ["Technology", "Engineering", "Problem Solving", "Mathematics"],
        minEducation: "bachelor",
        experienceLevel: "mid",
        workEnvironment: ["office", "remote", "hybrid"],
        salaryRange: "senior"
    },
    {
        id: 4,
        title: "Digital Marketing Manager",
        category: "Marketing",
        match: 0,
        description: "Digital marketing managers develop and implement online marketing strategies to promote brands, products, and services across digital channels.",
        salary: "$70,000 - $130,000",
        growth: "10% (Faster than average)",
        education: "Bachelor's in Marketing, Business, or related field",
        skills: ["Marketing", "Analytics", "Communication", "Strategy", "Creativity", "Leadership"],
        interests: ["Marketing", "Business", "Analytics", "Sales"],
        minEducation: "bachelor",
        experienceLevel: "mid",
        workEnvironment: ["office", "remote", "hybrid"],
        salaryRange: "mid"
    },
    {
        id: 5,
        title: "Product Manager",
        category: "Business",
        match: 0,
        description: "Product managers guide the success of a product and lead the cross-functional team that is responsible for improving it.",
        salary: "$90,000 - $160,000",
        growth: "10% (Faster than average)",
        education: "Bachelor's in Business, Computer Science, or related field",
        skills: ["Leadership", "Communication", "Strategy", "Problem Solving", "Analytics", "Teamwork"],
        interests: ["Business", "Technology", "Management", "Strategy"],
        minEducation: "bachelor",
        experienceLevel: "mid",
        workEnvironment: ["office", "hybrid"],
        salaryRange: "senior"
    },
    {
        id: 6,
        title: "Healthcare Administrator",
        category: "Healthcare",
        match: 0,
        description: "Healthcare administrators plan, direct, and coordinate medical and health services in various healthcare settings.",
        salary: "$65,000 - $150,000",
        growth: "28% (Much faster than average)",
        education: "Bachelor's in Health Administration or related field",
        skills: ["Leadership", "Communication", "Management", "Problem Solving", "Analytics"],
        interests: ["Healthcare", "Management", "Business"],
        minEducation: "bachelor",
        experienceLevel: "mid",
        workEnvironment: ["office"],
        salaryRange: "mid"
    },
    {
        id: 7,
        title: "Financial Analyst",
        category: "Finance",
        match: 0,
        description: "Financial analysts provide guidance to businesses and individuals making investment decisions.",
        salary: "$60,000 - $120,000",
        growth: "6% (As fast as average)",
        education: "Bachelor's in Finance, Economics, or related field",
        skills: ["Analytics", "Finance", "Problem Solving", "Communication", "Critical Thinking"],
        interests: ["Finance", "Analytics", "Business", "Mathematics"],
        minEducation: "bachelor",
        experienceLevel: "mid",
        workEnvironment: ["office"],
        salaryRange: "mid"
    },
    {
        id: 8,
        title: "Cybersecurity Analyst",
        category: "Technology",
        match: 0,
        description: "Cybersecurity analysts protect organizations' computer systems and networks from cyber threats.",
        salary: "$80,000 - $140,000",
        growth: "33% (Much faster than average)",
        education: "Bachelor's in Cybersecurity, Computer Science, or related field",
        skills: ["Programming", "Problem Solving", "Analytics", "Critical Thinking", "Communication"],
        interests: ["Technology", "Security", "Problem Solving", "Analytics"],
        minEducation: "bachelor",
        experienceLevel: "mid",
        workEnvironment: ["office", "remote", "hybrid"],
        salaryRange: "senior"
    },
    {
        id: 9,
        title: "Teacher/Educator",
        category: "Education",
        match: 0,
        description: "Teachers educate students in various subjects and grade levels, developing lesson plans and assessing student progress.",
        salary: "$45,000 - $85,000",
        growth: "4% (As fast as average)",
        education: "Bachelor's in Education or related field",
        skills: ["Communication", "Leadership", "Creativity", "Problem Solving", "Patience"],
        interests: ["Education", "Mentoring", "Subject Matter"],
        minEducation: "bachelor",
        experienceLevel: "entry",
        workEnvironment: ["field"],
        salaryRange: "entry"
    },
    {
        id: 10,
        title: "Sales Manager",
        category: "Sales",
        match: 0,
        description: "Sales managers direct organizations' sales teams, setting goals, analyzing data, and developing training programs.",
        salary: "$70,000 - $150,000+",
        growth: "5% (As fast as average)",
        education: "Bachelor's in Business, Marketing, or related field",
        skills: ["Leadership", "Communication", "Sales", "Strategy", "Analytics"],
        interests: ["Sales", "Business", "Management", "Communication"],
        minEducation: "bachelor",
        experienceLevel: "mid",
        workEnvironment: ["office", "field"],
        salaryRange: "mid"
    }
];


// Interests and skills data
const interests = [
    "Technology", "Healthcare", "Business", "Education", "Arts", 
    "Science", "Engineering", "Marketing", "Finance", "Design",
    "Writing", "Research", "Management", "Sales", "Analytics",
    "Psychology", "Mathematics", "Problem Solving", "Creativity", "Strategy"
];

const skills = [
    "Programming", "Data Analysis", "Project Management", "Communication", 
    "Problem Solving", "Leadership", "Creativity", "Critical Thinking",
    "Teamwork", "Time Management", "Public Speaking", "Writing",
    "Research", "Design", "Marketing", "Sales", "Customer Service",
    "Analytics", "Strategy", "Technical Skills", "Interpersonal Skills"
];


// DOM elements
const interestsContainer = document.getElementById('interests-container');
const skillsContainer = document.getElementById('skills-container');
const recommendBtn = document.getElementById('recommend-btn');
const loadingElement = document.getElementById('loading');
const resultsContainer = document.getElementById('results-container');
const careerResults = document.getElementById('career-results');
const compareBtn = document.getElementById('compare-btn');
const comparisonContainer = document.getElementById('comparison-container');
const comparisonTable = document.getElementById('comparison-table');
const saveBtn = document.getElementById('save-btn');

// Initialize the app
function initApp() {
    // Populate interests
    interests.forEach(interest => {
        const interestElement = document.createElement('div');
        interestElement.className = 'skill-tag';
        interestElement.textContent = interest;
        interestElement.addEventListener('click', () => {
            // Limit selection to 5 interests
            const selectedInterests = document.querySelectorAll('#interests-container .skill-tag.selected');
            if (selectedInterests.length < 5 || interestElement.classList.contains('selected')) {
                interestElement.classList.toggle('selected');
            } else {
                alert('Please select a maximum of 5 interests');
            }
        });
        interestsContainer.appendChild(interestElement);
    });

    
    // Populate skills
    skills.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.className = 'skill-tag';
        skillElement.textContent = skill;
        skillElement.addEventListener('click', () => {
            // Limit selection to 5 skills
            const selectedSkills = document.querySelectorAll('#skills-container .skill-tag.selected');
            if (selectedSkills.length < 5 || skillElement.classList.contains('selected')) {
                skillElement.classList.toggle('selected');
            } else {
                alert('Please select a maximum of 5 skills');
            }
        });
        skillsContainer.appendChild(skillElement);
    });

    // Add event listeners
    recommendBtn.addEventListener('click', generateRecommendations);
    compareBtn.addEventListener('click', toggleComparison);
    saveBtn.addEventListener('click', saveResults);
}


// Calculate career match percentage
function calculateCareerMatch(career, userData) {
    let matchScore = 0;
    let maxPossibleScore = 0;

    // Skills match (30% weight)
    const skillsWeight = 30;
    const userSkills = userData.skills || [];
    const careerSkills = career.skills || [];
    
    let skillsMatch = 0;
    userSkills.forEach(skill => {
        if (careerSkills.includes(skill)) {
            skillsMatch++;
        }
    });
    
    const skillsScore = skillsMatch / Math.max(userSkills.length, 1) * skillsWeight;
    matchScore += skillsScore;
    maxPossibleScore += skillsWeight;

    // Interests match (25% weight)
    const interestsWeight = 25;
    const userInterests = userData.interests || [];
    const careerInterests = career.interests || [];
    
    let interestsMatch = 0;
    userInterests.forEach(interest => {
        if (careerInterests.includes(interest)) {
            interestsMatch++;
        }
    });
    
       const interestsScore = interestsMatch / Math.max(userInterests.length, 1) * interestsWeight;
    matchScore += interestsScore;
    maxPossibleScore += interestsWeight;

    // Education match (15% weight)
    const educationWeight = 15;
    const educationLevels = {
        "highschool": 0,
        "associate": 1,
        "bachelor": 2,
        "master": 3,
        "phd": 4
    };
    
    const userEducationLevel = educationLevels[userData.education] || 0;
    const requiredEducationLevel = educationLevels[career.minEducation] || 0;
    
    let educationScore = 0;
    if (userEducationLevel >= requiredEducationLevel) {
        educationScore = educationWeight;
    } else {
        // Partial credit if close to required level
        const difference = requiredEducationLevel - userEducationLevel;
        educationScore = Math.max(0, educationWeight - (difference * 5));
    }
    
    matchScore += educationScore;
    maxPossibleScore += educationWeight;

    // Experience match (10% weight)
    const experienceWeight = 10;
    const experienceLevels = {
        "0": 0,
        "1": 1,
        "3": 2,
        "5": 3,
        "10": 4
    };
       const userExperienceLevel = experienceLevels[userData.experience] || 0;
    const requiredExperienceLevel = experienceLevels[career.experienceLevel] || 0;
    
    let experienceScore = 0;
    if (userExperienceLevel >= requiredExperienceLevel) {
        experienceScore = experienceWeight;
    } else {
        // Partial credit based on how close
        experienceScore = (userExperienceLevel / Math.max(requiredExperienceLevel, 1)) * experienceWeight;
    }
    
    matchScore += experienceScore;
    maxPossibleScore += experienceWeight;

    // Work environment match (10% weight)
    const environmentWeight = 10;
    const userEnvironment = userData.workEnvironment;
    const careerEnvironments = career.workEnvironment || [];
    
    let environmentScore = 0;
    if (userEnvironment && careerEnvironments.includes(userEnvironment)) {
        environmentScore = environmentWeight;
    } else if (userEnvironment && careerEnvironments.length > 0) {
        // Partial credit if some flexibility exists
        environmentScore = environmentWeight * 0.5;
    }
    
    matchScore += environmentScore;
    maxPossibleScore += environmentWeight;

    // Salary expectation match (10% weight)
    const salaryWeight = 10;
    const userSalary = userData.salaryExpectation;
    const careerSalary = career.salaryRange;
    
    const salaryLevels = {
        "entry": 0,
        "mid": 1,
        "senior": 2,
        "executive": 3
    };
        let salaryScore = 0;
    if (userSalary && careerSalary) {
        const userSalaryLevel = salaryLevels[userSalary] || 0;
        const careerSalaryLevel = salaryLevels[careerSalary] || 0;
        
        if (userSalaryLevel <= careerSalaryLevel) {
            salaryScore = salaryWeight;
        } else {
            // Partial credit based on how close
            const difference = userSalaryLevel - careerSalaryLevel;
            salaryScore = Math.max(0, salaryWeight - (difference * 3));
        }
    }
    
    matchScore += salaryScore;
    maxPossibleScore += salaryWeight;

    // Calculate final percentage
    const finalPercentage = Math.min(100, Math.round((matchScore / maxPossibleScore) * 100));
    
    return finalPercentage;
}


// Generate career recommendations
function generateRecommendations() {
    // Validate form
    const name = document.getElementById('name').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const workEnvironment = document.getElementById('work-environment').value;
    const salaryExpectation = document.getElementById('salary-expectation').value;
    
    if (!name || !education || !experience || !workEnvironment || !salaryExpectation) {
        alert('Please fill in all required fields');
        return;
    }
    
    const selectedInterests = Array.from(document.querySelectorAll('#interests-container .skill-tag.selected'))
        .map(el => el.textContent);
        
    const selectedSkills = Array.from(document.querySelectorAll('#skills-container .skill-tag.selected'))
        .map(el => el.textContent);
        
    if (selectedInterests.length < 3 || selectedSkills.length < 3) {
        alert('Please select at least 3 interests and 3 skills');
        return;
    }

    // Show loading animation
    loadingElement.style.display = 'block';
    resultsContainer.style.display = 'none';
    comparisonContainer.style.display = 'none';

    // Prepare user data
    const userData = {
        name,
        education,
        experience,
        workEnvironment,
        salaryExpectation,
        interests: selectedInterests,
        skills: selectedSkills
    };
