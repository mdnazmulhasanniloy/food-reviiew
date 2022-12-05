import React from 'react';
import { useTitle } from '../../Hooks/UseTitle';

const Blog = () => {
    useTitle('Blogs')
    return (
        <div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What the Difference of SQL and NOSQL
                </div>
                <div className="collapse-content"> 
                <p><strong>SQL: </strong> SQL is a Relational Database management system. It vertically scalable. Fixed or predifined schema. Not suitable for hierarchical data storage. can be used for complex queries</p>
                <p><strong>NoSQL: </strong> NoSQL is a Distributed Database management system. It Horizontally scalable. Dynamic schema. Vest suitable data storage. Not good for complex queries.</p>
                </div>
            </div>
            <div tabIndex={1} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
            What is JWT How it works?
            </div>
            <div className="collapse-content"> 
                <p>JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.</p>
                <p>Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.</p>
                <ul>
                    <li>1. User sign-in using username and password or google/facebook.</li>
                    <li>2. Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key.</li>
                    <li>3. User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header.</li>
                    <li>4. Resource server then verifies the authenticity of the token using the secret salt/ public key.</li>
                </ul>
            </div>
            </div>

            <div tabIndex={2} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
                Difference between Node.JS and Javascript?
            </div>
            <div className="collapse-content"> 
            <p><strong>JavaScript: </strong> Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. </p>
            <p><strong>NodeJs: </strong> NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.</p>
            </div>
        </div>
            <div tabIndex={3} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
            How NodeJS handle multiple client requests at same time?
            </div>
            <div className="collapse-content"> 
            <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.  </p>
            <p>If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
            </div>
  </div>
        </div>
    );
};

export default Blog;