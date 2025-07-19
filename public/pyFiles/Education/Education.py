from abc import ABC, abstractmethod
from typing import List, Optional

class Education(ABC):
    """
    Abstract base class for educational institutions.
    Provides common interface and functionality for all education classes.
    """
    
    def __init__(self, name: str, location: str, degree: str, gpa: float):
        self.name = name
        self.location = location
        self.degree = degree
        self.gpa = gpa
        self.courses: List[str] = []
    
    @abstractmethod
    def get_graduation_info(self) -> str:
        """Return graduation information specific to the institution"""
        pass
    
    def get_course_count(self) -> int:
        """Common method to get number of courses"""
        return len(self.courses)
    
    def get_formatted_gpa(self) -> str:
        """Common method to format GPA"""
        return f"{self.gpa:.2f}"
    
    def add_course(self, course: str) -> None:
        """Common method to add a course"""
        self.courses.append(course)
    
    def get_institution_summary(self) -> str:
        """Common method to get a summary of the institution"""
        return f"{self.name} - {self.location}"
    
    def get_degree_info(self) -> str:
        """Common method to get degree information"""
        return f"{self.degree} (GPA: {self.get_formatted_gpa()})"