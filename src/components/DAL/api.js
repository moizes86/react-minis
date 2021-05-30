export default function login(username, password){
    const DB = [{username: 's@s.s', password:'123123'}, {username:'moshe@gmail.com', password:'123456'}];
    for (const el of DB){
        if (el.username === username && el.password === password){
            return true;
        }
    }
    return false;
}
