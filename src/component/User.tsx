type userType={name:string;father:string;mother:string;age:number,isRegister:boolean}
const User = ({name,father,mother,age,isRegister}:userType) => {
    return (
        <div>
           <ul className="person">
           <li >{name}</li>
           <li >{father}</li>
           <li >{mother}</li>
           <li >{age}</li>
           {isRegister?<p>Register user</p>:<p>Not user</p> }
           </ul>
        </div>
    );
};

export default User;