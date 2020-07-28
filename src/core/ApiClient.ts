import Axios, { AxiosResponse } from 'axios'
import { User } from "../shared/models/User"
import { Observable } from 'rxjs'
import { Subject } from 'rxjs';
import { Skill } from 'src/shared/models/Skill';



export class ApiClient {
    private readonly baseUrl = 'http://192.168.0.19:3000/'
    private readonly regUser = this.baseUrl + 'users/register/'
    private readonly logIn = this.baseUrl + 'users/login/'
    private readonly updateSkillsUrl = this.baseUrl + 'users/update-skills'
    private axios = Axios.create({
        baseURL: this.baseUrl,
        timeout: 5000
    })

    // use an observable to listen for server response
    registerUser(user: User, verificationCode: string): Subject<any> {
        var eventStream = new Subject()
        var obs = new Observable()

        this.axios.post(this.regUser, {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password,
            verificationCode: verificationCode
        })
        .then((response) => {
            //console.log(response)
            eventStream.next(response)
        })
        
        return eventStream
    }

    authUser(user: User): Subject<any> {
        var eventStream = new Subject()

        this.axios.post(this.logIn, {
            email: user.email,
            password: user.password
        })
        .then((response) => {
            eventStream.next(response)
        })

        return eventStream
    }

    updateSkills(skills: Array<Skill>, id: string): Subject<any> {
        var eventStream = new Subject()

        this.axios.post(this.updateSkillsUrl, {
            skills: skills,
            id: id
        }, {
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
        })
        .then((response) => {
            eventStream.next(response)
        })

        return eventStream
    }
}
