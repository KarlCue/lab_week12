const myArray = ['foo']

function selectSingleElement(myArray){
    console.log(myArray[0]);
}

const students = [
    { name: "Tasha", grades: [ 80, 67, 75, 62 ] },
    { name: "Tuvok", grades: [ 90, 88, 91, 92 ] },
    { name: "Dax", grades: [ 88, 90, 89, 85 ] },
    { name: "Neelix", grades: [ 60, 54, 48, 50 ] }
  ]
  
  const getAverageGrade = (gradesArray) => gradesArray.reduce((a, b) => a + b, 0) / 4;
  
  const GetStudentsWithScholarship = students.filter(x => {
      const { name, grades } = x;
      const averageGrade = getAverageGrade(grades);
      
      return averageGrade >= 80;
  });
  
  function structureElementObj(){
      return GetStudentsWithScholarship.map(x => {
          const { name, grades } = x; 
          const gradeAvg = getAverageGrade(grades);
          return {name,  gradeAvg};
      });
  }
  
  const studentsScholarship = structureElementObj();
  
  console.log(studentsScholarship)

function themeSwitch(){
    darktheme = document.querySelector('.container light-theme')
    darktheme.classList.add('dark-theme');
}
