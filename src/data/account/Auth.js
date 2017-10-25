import axios from 'axios';
import endpoints, { cid, secret } from '../Endpoint';

export function* getTokenAsync({email, password}){
    yield axios({method: 'post', 
                 url: endpoints.OAUTH,
                 headers: {'Content-Type': 'application/json'},
                 data: {
                    username: email,
                    password,
                    grant_type: "password",
                    client_id: cid,
                    client_secret: secret,
                    scope: ""
                 }}).then(function(response){
                    return response.data.data;
                 }).catch(function(err){
                    return null;
                 }); 
}
