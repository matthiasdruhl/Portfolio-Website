from Experience import Experience
from Projects.Project import Project

class EddgeRAFB(Experience):
    def __init__(self):
        super().__init__(
            name="EDDGE Team - United States Air Force",
            location="Macon, GA",
            dates="May 2025 - Present",
            role="Software Engineering Intern - Team Lead",
            project=Project(
                name="Automated Microcontroller Instruction Generator (AMIG)",
                status="In Progress",
                dates="May 2025 - Present",
                role="Team Lead and Full Stack Developer",
                description="A web application that converts scanned PDFs containing microcontroller instructions into Rust code using a RAG-augmented LLM architecture with locally hosted Ollama instances. The system includes automated code validation and compilation through dedicated testing containers.",
                teamates=[
                    "Development Team",
                    "LLM Specialists",
                    "DevOps Engineers"
                ],
                techStack={
                    "Frontend": "HTML/CSS/JavaScript",
                    "Backend": "Flask/FastAPI",
                    "Containerization": "Docker",
                    "LLM": "Ollama (Local)",
                    "Programming": "Rust, Python",
                    "Architecture": "RAG (Retrieval Augmented Generation)",
                    "Testing": "Rust Unit Testing",
                    "Workflow": "Microservices"
                },
                organization="United States Air Force"
            ),
            manager=["Dextor Buschor", "Neha Patel"]
        )
        
        # Add specific achievements
        self.achievements = [
            "Led development of a web application to convert scanned PDFs containing microcontroller instructions into Rust code leveraging a RAG-augmented, LLM architecture with locally hosted Ollama instances",
            "Constructed a full-stack web application (HTML/CSS/JS frontend, Flask/FastAPI backend) comprising six interconnected Docker containers for efficient workflow management",
            "Incorporated a dedicated Rust unit testing container to compile and validate LLM-generated code, guaranteeing functional output automatically"
        ]
        
        # Add skills developed
        self.skills_developed = [
            "Team Leadership",
            "Full Stack Development",
            "LLM Integration",
            "RAG Architecture",
            "Docker Containerization",
            "Microservices Design",
            "Rust Programming",
            "Python Backend Development",
            "Frontend Development (HTML/CSS/JS)",
            "Automated Testing",
            "DevOps Practices",
            "PDF Processing",
            "Code Generation",
            "Microcontroller Systems"
        ]
        
        # Add technical details
        self.technical_details = {
            "Architecture": "RAG-augmented LLM",
            "Container Count": "6 interconnected Docker containers",
            "LLM Platform": "Locally hosted Ollama instances",
            "Code Generation": "PDF to Rust code conversion",
            "Testing": "Automated Rust unit testing",
            "Validation": "Automatic functional output guarantee",
            "Workflow": "Efficient microservices management"
        }
    
    def get_experience_summary(self) -> str:
        return f"{self.role} at {self.name} in {self.location}. Leading development of an automated microcontroller instruction generator using RAG-augmented LLM architecture with Docker containerization and automated testing."
    
    def get_achievements_summary(self) -> str:
        return f"Key achievements: {len(self.achievements)} major accomplishments including LLM integration, full-stack development, and automated code validation system."
    
    def get_technical_highlights(self) -> dict:
        return {
            "LLM Integration": "RAG-augmented architecture with Ollama",
            "Containerization": "6 interconnected Docker containers",
            "Code Generation": "PDF to Rust conversion",
            "Testing": "Automated Rust unit testing",
            "Leadership": "Team Lead responsibilities",
            "Full Stack": "HTML/CSS/JS frontend with Flask/FastAPI backend"
        }
    
    def get_skills_summary(self) -> str:
        return f"Developed expertise in {len(self.skills_developed)} technical areas including LLM integration, containerization, and team leadership."