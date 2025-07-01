

// route for user login
const loginUser = async(req,res) => {

}

// route for user registration

const registerUser = async (req,res) => {
    
    try {
        res.json({msg:"api working"});
    } catch (error) {
        console.error(error);
    }
}


// route for adming login

const adminLogin = async (req,res) => {

}

export {loginUser, registerUser, adminLogin} 