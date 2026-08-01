//main page tiny window
export const aboutMe = [
    'I am a Computer Science Major!',
    'I am currently a junior at CSUF.',
    'I love my friends! I enjoy spending time with them.',
];
export const professional = [
    'I am currently learning Flutter!',
    'I want get into more backend development.', 
    'I have been doing supplemental instruction for 2 semesters!',
    'Incoming ULC Tutor @ CSUF',
    'I was an Open Source ACM Board member!',
    'I was a project lead for Open Source Stats!',
    'I have previously assisted students in Business Calculus and Calc II.',
];
export const randomFactsAboutMe = [
    'Originally an Oregonian!',
    'Previous VALORANT Addict',
    'I love freeways. I study them to the point where I don\'t even need a GPS.',
    'My favorite song is Deja Vu by TOMORROW X TOGETHER',
    'I occasionally play Umamusume: Pretty Derby',
    'I am a sucker for romance K-Drama or Anime.'
];

//about me
export const detailedAbout = {
    "generalAbout" : {"Hi, my name is Adam": {
        "year": "I am currently a junior @CSUF.",
        "hobbies": "Video Games, Binging TV, Learning New Things",
        "games": "VALORANT, Marvel Rivals, Fortnite, Minecraft"
    }},
    "professionally" : [{
            title: "Supplemental Instruction @ CSUF",
            overview: "Facilitated Peer-Study Sessions for Business Calculus and Calc II Students.",
            active : "Active since August 2025",
            bulletPoints: ["Host workshops for students to help them better engage with the material learned from the lecture.",
                             "Create engaging activities that promote group work for better productivity.",
                             "Increase students' grades by +10% when attending sessions regularly."
            ],
            link: "https://www.fullerton.edu/si/",
            image: "images/aboutImages/si.jpg"
        },
        {
            title: "University Learning Center Tutor @ CSUF",
            overview: "Assisted students in one-on-one sessions focusing on Math and Computer Science concepts.",
            active : "June 2026 - August 2026",
            bulletPoints: ["Assisted +10 students in tutoring sessions relating to Calculus.",
                             "Explained various Calculus concepts and Computer science concepts for better understanding.",
                             "Guided students through various problems giving step by step instructions."
            ],
            link: "https://www.fullerton.edu/ulc/",
            image:"images/aboutImages/ulc.jpg"
    },
    ],
    "community" : [
        {
            title: "Open Source Officer @ Association for Computing Machinary",
            overview: "Develop and lead a project for ACM's Open Source branch @ CSUF.",
            active : "Active since January 2026",
            bulletPoints: ["Host weekly Open Source workshops for new and current members of the ACM Chapter.",
                "Work alongside board members to create engaging topics in the Open Source world.",
                "Lead various projects associated with the Association for Computing Machinery club."
            ],
            link: "https://acmcsuf.com/teams#oss",
            image: "images/aboutImages/acm.png"
        }
    ],
    "techStack": [{ image: "images/aboutImages/code-stable-white.png", alt: "Visual Studio Code" }, { image: "images/aboutImages/android-studio.png", alt: "Android Studio" }, { image: "images/aboutImages/java.png", alt: "Java" }, { image: "images/aboutImages/python.png", alt: "Python" }, { image: "images/aboutImages/cpp.png", alt: "C++" }
        , { image: "images/aboutImages/html.png", alt: "HTML" }, { image: "images/aboutImages/css.png", alt: "CSS" }, { image: "images/aboutImages/js.png", alt: "JS" }, { image: "images/aboutImages/svelte.png", alt: "Svelte" }, { image: "images/aboutImages/dart.png", alt: "Dart" }, { image: "images/aboutImages/firebase.webp", alt: "Firebase" }
    ],
};

//projects
export const projects = [
    {
        title: "Stay Consistent",
        techStack: ["Dart", "Flutter", "Figma", "Firebase", "iOS", "Android", "Android Studio"],
        description: "An app that allows the user to create one or more goals, and the app keeps track of progress and reminds you to do your dailies.",
        githubLink: "",
    },
        {
        title: "OSS-Stats",
        techStack: ["Python", "CLI", "GitHub API"],
        description: "Python-CLI tool that fetches statistics, like commits, issues, pull requests, and stars from the acmcsufoss GitHub organization and all related repositories.",
        githubLink: "https://github.com/acmcsufoss/oss-stats",
    },
    {
        title: "HappyChild for Autism",
        techStack: ["Python", "TKinter", "Justinmiind"],
        description: "Senior project presented @ Liberty High School, Hillsboro OR that aims to combine the features of Proloque2Go, Birdhouse for Autism, and Social Story Creater and Library, to have a more unified app for communication, learning, and management.",
        githubLink: "",
    },
    {
        title: "Grade-Calculator",
        techStack: ["HTML", "CSS", "JavaScript"],
        description: "AP Computer Science Principles Performance Task program where users can add assignments and the associated assignment weights to get a final calculation of their grade. Users may also edit and delete assignments if needed.",
        githubLink: "https://github.com/FarmerAKH/Grade-Calculator",
    },
    
]