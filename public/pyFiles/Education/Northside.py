from Education import Education
from typing import List

class NorthsideHighSchool(Education):
    def __init__(self):
        super().__init__(
            name="Northside High School",
            location="Warner Robins, GA",
            degree="High School Diploma",
            gpa=4.0
        )
        self.sat_score = 1540
        self.class_rank = 3/343
        self.courses = [
            "AP Statistics - Score: 5",
            "AP Government and Politics: United States - Score: 5",
            "AP English Language and Composition - Score: 4",
            "AP World History - Score: 4",
            "AP United States History - Score: 4",
            "AP Physics 1 - Score: 4",
            "AP Art History - Score: 4",
            "AP Environmental Science - Score: 4",
            "AP Macroeconomics - Score: 4"
        ]
        self.extracurriculars = [
            "Varsity Cross Country",
            "Varsity Track and Field",
            "DECA",
            "Beta Club",
            "FCA"
        ]
        self.awards = [
            "National Merit Scholarship Corporation Recipient",
            "AP Scholar with Distinction",
            "University of Georgia Certificate of Merit Recipient",
            "DECA State Runner Up - Principles of Finance",
            "STAR Student (Highest SAT) - Houston County",
            "Cross Country All-Region",
            "Track and Field All-Region"
        ]
    
    def get_graduation_info(self) -> str:
        return f"Class Rank: {self.class_rank} out of 343 students"
    
    def get_sat_info(self) -> str:
        """Get SAT score information"""
        return f"SAT Score: {self.sat_score}"
    
    def get_extracurriculars(self) -> List[str]:
        """Get list of extracurricular activities"""
        return self.extracurriculars
    
    def get_awards(self) -> List[str]:
        """Get list of awards and achievements"""
        return self.awards
    
    def get_ap_courses(self) -> List[str]:
        """Get only AP courses with scores"""
        return [course for course in self.courses if course.startswith("AP")]
    
    def get_ap_score_average(self) -> float:
        """Calculate average AP score"""
        ap_courses = self.get_ap_courses()
        if not ap_courses:
            return 0.0
        
        scores = []
        for course in ap_courses:
            if "Score:" in course:
                score = int(course.split("Score:")[1].strip())
                scores.append(score)
        
        return sum(scores) / len(scores) if scores else 0.0