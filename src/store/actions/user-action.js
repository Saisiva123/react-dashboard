export const loggedIn = (userDetails)=>
{
    return {type:'LOGGEDIN',payload:userDetails}
}
export const loggedOut = ()=>
{
    return {type:'LOGGEDOUT'};
}