from Education import Education
from typing import List

class GeorgiaTech(Education):
    def __init__(self):
        super().__init__(
            name="Georgia Institute of Technology",
            location="Atlanta, GA",
            degree="Bachelor of Science in Computer Science",
            gpa=3.03
        )
        self.expected_graduation_date = "December 2026"
        self.courses = {
            "CS 1301": "Introduction to Computing",
            "CS 1331": "Object Oriented Programming",
            "CS 1332": "Data Structures and Algorithms",
            "CS 2050": "Discrete Mathematics",
            "CS 2110": "Computer Organization",
            "CS 3001": "Computing Society and Professionalism",
            "CS 3510": "Design and Analysis of Algorithms",
            "CS 3600": "Introduction to Artificial Intelligence",
            "Math 1551": "Differential Calculus",
            "Math 1552": "Integral Calculus",
            "Math 1554": "Linear Algebra",
            "Math 2550": "Multivariable Calculus",
            "ISYE 3770": "Statistics and Probability"
        }
        self.honors = [
            "Dean's List: Fall 2023, Spring 2024"
        ]
    
    def get_graduation_info(self) -> str:
        return f"Expected Graduation: {self.expected_graduation_date}"
    
    def get_honors(self) -> List[str]:
        """Get list of honors and achievements"""
        return self.honors
    
    def get_cs_courses(self) -> List[str]:
        """Get only computer science courses"""
        return [f"{code}: {name}" for code, name in self.courses.items() if code.startswith("CS")]
    
    def get_math_courses(self) -> List[str]:
        """Get only mathematics courses"""
        return [f"{code}: {name}" for code, name in self.courses.items() if code.startswith("Math")]