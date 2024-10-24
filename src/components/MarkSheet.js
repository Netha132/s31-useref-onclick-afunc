import React, { useRef } from 'react'

function MarkSheet() {
    let telInputRef=useRef();
    let hinInputRef=useRef();
    let engInputRef=useRef();
    let matInputRef=useRef();
    let sciInputRef=useRef();
    let socInputRef=useRef();
    let firstLabelRef=useRef();
    let lastLabelRef=useRef();
    let rollNoLabelRef=useRef();

    let resultLabelRef=useRef();

  return (
    <div>
      <form>
        <fieldset>
        <legend>MarkSheet</legend>

        <fieldset>
          <legend>Student Details</legend>
      <div>
        <label>Firstname</label>
        <input className='capital' ref={firstLabelRef}></input>
      </div>

      <div>
        <label>Lastname</label>
        <input className='capital' ref={lastLabelRef}></input>
      </div>

      <div>
        <label>Roll.No</label>
        <input type='number' maxLength={6} ref={rollNoLabelRef}></input>
      </div>

      </fieldset>
      <div>
        <label>Telugu</label>
        <input type='number' ref={telInputRef}></input>
      </div>

      <div>
        <label>Hindi</label>
        <input type='number' ref={hinInputRef} ></input>
      </div>

      <div>
        <label>English</label>
        <input type='number' ref={engInputRef}></input>
      </div>

      <div>
        <label>Maths</label>
        <input type='number' ref={matInputRef}></input>
      </div>

      <div>
        <label>Science</label>
        <input type='number' ref={sciInputRef}></input>
      </div>

      <div>
        <label>Social</label>
        <input type='number' ref={socInputRef}></input>
      </div>

<div>
        <button type='reset' onClick={()=>{

            let telMarks=Number(telInputRef.current.value);
            let hinMarks=Number(hinInputRef.current.value);
            let engMarks=Number(engInputRef.current.value);
            let MatMarks=Number(matInputRef.current.value);
            let sciMarks=Number(sciInputRef.current.value);
            let socMarks=Number(socInputRef.current.value);
            let rollNo=Number(rollNoLabelRef.current.value);
            let firstName=firstLabelRef.current.value;
            let lastName=lastLabelRef.current.value;

            let totalMarks=telMarks+hinMarks+engMarks+MatMarks+sciMarks+socMarks;


            alert(`${firstName} ${lastName}  RollNo: ${rollNo}  the total marks ${totalMarks}`);
            
            resultLabelRef.current.innerHTML=`${firstName} ${lastName} RollNo: ${rollNo} total marks are ${totalMarks}`;
            
        }}>Submit</button>
  </div>
        <label className='result' ref={resultLabelRef}>Please enter the marks and submit it</label>
        </fieldset>

     </form>
    </div>
  )
}

export default MarkSheet
