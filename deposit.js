function Deposit(){
    const [show, setShow]         = React.useState(true);
    const [status, setStatus]     = React.useState('');
    const [amount, setAmount]   = React.useState('');
   
    const ctx = React.useContext(UserContext);  
    
    function validate(field, label){
      if (isNaN(field) == true) {
        setStatus( 'Please enter a valid ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      if (Math.sign(field) == -1) {
        setStatus( 'Please enter a valid ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
  
      }
      if (!field) {
        setStatus( 'Please enter a valid ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }
  
    function handleDeposit(){
      if (!validate(amount, 'amount')) return;
      ctx.users[0].balance += parseInt(amount);
      setShow(false);
    }    
    function clearForm(){
      setAmount('');
      setShow(true);
    }
    
   
    return (
     
      <center><Card
        bgcolor="success"
        header="Make Deposit"
        status={status}
        body={show ? (  
              
                <>
                <div>Your Balance is currently: ${ctx.users[0].balance}</div>
                Deposit Money<br/>
                <input type="input" className="form-control" id="amount" placeholder="Enter amount" value={amount} onChange={e => setAmount(e.currentTarget.value)} /><br/>
                <button type="submit" disabled={!amount} className="btn btn-light" onClick={handleDeposit}>Submit</button>
                </>
              ):(
                <>
                <h5>Success</h5>
                <div>You deposited {amount}</div>
                <button type="submit" className="btn btn-light" onClick={clearForm}>Make Another Deposit</button>
                </>
              )}
      /></center>
    )
  }