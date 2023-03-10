import React from 'react';
import { DefaultConstants } from '../../constants/constants';
import './Subscriber.css';

const Subscriber = () => {
  return (
    <>
      <div className="container-fluid my-5 subscriber-container" style={{backgroundColor: '#edf7fe'}}>
        <div className="row justify-content-md-center py-5">
            <div className="col-md-6 col-12 py-5">
                <div className="text-center mb-2 pb-2">
                    <h2 className="section-title px-5 mb-3">
                      <span className="px-2">{DefaultConstants.STAYUPDATED}</span></h2>
                    <p>Amet lorem at rebum amet dolores. Elitr lorem dolor sed amet diam labore at justo ipsum eirmod duo labore labore.</p>
                </div>
                <form action="">
                    <div className="input-group">
                        <input type="text" className="form-control border-white p-4" placeholder="Email Goes Here" fdprocessedid="l3wz9"/>
                        <div className="input-group-append">
                            <button className="btn px-4" style={{backgroundColor: "#ac0d1c77"}} fdprocessedid="q0fsq">{DefaultConstants.SUBSCRIBE}</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Subscriber;