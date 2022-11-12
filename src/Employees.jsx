import './App.css'
import maleProfile from './Images/maleProfile.jpg'
import femaleProfile from './Images/femaleProfile.jpg'
const Employees = ({employees, selectedTeam,handleEmployeeCardClick,handleTeamSelectionChange}) => {
  
  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-4">
        <div className='col-8'>
          <select className="form-select form-select-lg" value={selectedTeam} onChange={handleTeamSelectionChange}
          >
            <option value='teamA'> TeamA</option>
            <option value='teamB'> TeamB</option>
            <option value='teamC'> TeamC</option>
            <option value='teamD'> TeamD</option>
          </select>
        </div>
      </div>
      <div className="row justify-content-center mt-3 mb-4">
        <div className='col-8'>

          <div className="card-collection">
            {employees.map((employee) => (

              <div key={employee.id} id={employee.id} className={(employee.teamName === selectedTeam ? 'card m-2  standout' : 'card m-2')} style={{ cursor: 'pointer' }} onClick={handleEmployeeCardClick}>
                {(employee.gender === "male") ? <img src={maleProfile} alt='male profile pic' className="card-img-top" /> :
                  <img src={femaleProfile} alt='female profile pic' className="card-img-top" />
                }

                <div className="card-body">
                  <h5 className="card-title">Full Name : {employee.fullName}</h5>
                  <p className="card-text"> <b>Designation :</b> {employee.designation} </p>
                </div>
              </div>

            ))}
          </div>
        </div>
      </div>

    </main>
  )
}

export default Employees