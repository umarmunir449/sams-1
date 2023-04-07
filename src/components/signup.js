

export default function signup() {
  return (
    <div class="container">
    <form id="form" class="form"> 
        <h2>Sign Up</h2> 
        <div class="form-handler">
            <label for="username"><b>UserNmae:</b></label>
            <input type="text" placeholder="Enter UserName" name="User Name" required />
            <small>Error message</small>
        </div>
    
        <div class="form-handler">
            <label for="pasword"><b>Pasword:</b></label>
            <input type="password" id="pasword" placeholder="Enter Pasword" name="Pasword" required />
            <small>Error message</small>
        </div>
    
        <div class="form-handler">
            <label for="pasword"><b>Confirm Pasword:</b></label>
            <input type="password" id="pasword" placeholder="Confirm Pasword" name="Pasword" required />
            <small>Error message</small>
    
        </div>
    
        <div class="form-handler">
            <label for="Email"><b>Email:</b></label>
            <input type="email" placeholder="Enter your Email" name="Email" required />
            <small>Error message</small>
        </div>
        <div class="clearfix">
            <button type="button" class="cancelbtn">Cancel</button>
            <button type="submit" class="signupbtn">Sign Up</button>
          </div>
       
        
    </form>
    
        </div>
  )
}
