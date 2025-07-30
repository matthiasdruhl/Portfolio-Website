from Experience import Experience
from Projects.Project import Project

class SWEG402(Experience):
    def __init__(self):
        super().__init__(
            name="402 Software Engineering Group - United States Air Force",
            location="Warner Robins, GA",
            dates="June 2023 - August 2024",
            role="Software Engineering Intern",
            project=Project(
                name="Autonomous Vehicle Navigation System",
                status="Completed",
                dates="June 2023 - August 2024",
                role="Computer Vision Engineer & Embedded Systems Developer",
                description="Developed a comprehensive autonomous vehicle navigation system using computer vision and embedded systems for military applications. The system included real-time object detection, terrain analysis, and aircraft flare dispensing simulation.",
                teamates=[
                    "Software Engineering Team",
                    "Computer Vision Specialists",
                    "Embedded Systems Engineers"
                ],
                techStack={
                    "Computer Vision": "YOLO, Roboflow",
                    "Programming": "Python",
                    "Embedded Systems": "Microcontrollers",
                    "Development": "Agile Scrum",
                    "Hardware": "Circuit Design, Control Systems"
                },
                organization="United States Air Force"
            ),
            manager=["Software Engineering Group Leadership"]
        )
        
        # Add specific achievements
        self.achievements = [
            "Engineered and deployed a YOLO-based computer vision model via Roboflow to enable autonomous vehicle navigation across diverse terrains, achieving real-time object detection with 92% accuracy",
            "Collaborated in Agile Scrum sprints to build embedded system simulations, completing implementation 40% ahead of deadline",
            "Designed and assembled microcontroller based circuits and programmed control systems in Python to simulate flare dispensing for military aircraft"
        ]
        
        # Add skills developed
        self.skills_developed = [
            "Computer Vision Development",
            "YOLO Object Detection",
            "Roboflow Platform",
            "Embedded Systems Programming",
            "Microcontroller Circuit Design",
            "Python Programming",
            "Agile Scrum Methodology",
            "Military Software Development",
            "Real-time Systems",
            "Hardware-Software Integration"
        ]
        
        # Add technical details
        self.technical_details = {
            "Object Detection Accuracy": "92%",
            "Implementation Speed": "40% ahead of deadline",
            "Terrain Types": "Diverse terrains",
            "System Type": "Real-time autonomous navigation",
            "Hardware Integration": "Microcontroller-based circuits",
            "Military Application": "Aircraft flare dispensing simulation"
        }
    
    def get_experience_summary(self) -> str:
        return f"{self.role} at {self.name} in {self.location}. Developed autonomous vehicle navigation systems using computer vision and embedded systems, achieving 92% object detection accuracy and completing projects 40% ahead of schedule."
    
    def get_achievements_summary(self) -> str:
        return f"Key achievements: {len(self.achievements)} major accomplishments including computer vision model deployment, embedded system development, and hardware integration."
    
    def get_technical_highlights(self) -> dict:
        return {
            "Computer Vision": "YOLO-based object detection with 92% accuracy",
            "Embedded Systems": "Microcontroller circuit design and programming",
            "Development Process": "Agile Scrum methodology",
            "Performance": "40% ahead of deadline implementation",
            "Military Applications": "Aircraft flare dispensing simulation"
        }
    
    def get_skills_summary(self) -> str:
        return f"Developed expertise in {len(self.skills_developed)} technical areas including computer vision, embedded systems, and military software development."