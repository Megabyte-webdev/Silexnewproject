import React, { useContext, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import CoursesWithTime from '../Learning/CoursesWithTime'
import { Link } from 'react-router-dom'
import createIcon from "../../assets/add-schedule.svg"
import { MdAddBox } from "react-icons/md";
import axios from 'axios'
import { UserContext } from '../../context/AuthContext'
import { ResourceContext } from '../../context/ResourceContext'
import toast from 'react-hot-toast'
import { BASE_URL } from '../utils/base'
import UpdateForm from '../instructor/UpdateForm'
import CreateInstructorForm from '../instructor/CreateInstructorForm'

const AddInstructor = () => {

    const { userCredentials } = useContext(UserContext)
    const {
        getAllCourses,
        setGetAllCourses,
        getAllUsers,
        setGetAllSchedules,
        setGetAllUsers } = useContext(ResourceContext)

    const [errorMsg, setErrorMsg] = useState("")
    const [showMsg, setShowMsg] = useState(false)
    const [loading, setLoading] = useState(false)

    const [details, setDetails] = useState({
        day: "",
        start_time: "",
        end_time: "",
        instructor_id: "",
        course_id: "",
    })

    useEffect(() => {
        setGetAllCourses((prev) => {
            return {
                ...prev, isDataNeeded: true
            }
        })
    }, [])

    useEffect(() => {
        setGetAllUsers((prev) => {
            return {
                ...prev, isDataNeeded: true
            }
        })
    }, [])

    const handleOnChange = (e) => {
        const { value, name, type, checked } = e.target
        setDetails((prev) => {
            return {
                ...prev,
                [name]: type === "checkbox" ? checked : value
            };
        });
        setErrorMsg("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrorMsg("")
        setGetAllCourses((prev) => {
            return {
                ...prev, isDataNeeded: false
            }
        })
        setGetAllSchedules((prev) => {
            return {
                ...prev, isDataNeeded: false
            }
        })
        setLoading(true)
        axios.post(`${BASE_URL}schedule/addSchedule`, details, {
            headers: {
                Authorization: `Bearer ${userCredentials.token}`,
            },
        })
            .then((response) => {
                // console.log(response)
                setGetAllCourses((prev) => {
                    return {
                        ...prev, isDataNeeded: true
                    }
                })
                setGetAllSchedules((prev) => {
                    return {
                        ...prev, isDataNeeded: true
                    }
                })
                resetStates()
                setLoading(false)
                toast.success("successful");
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error)
                    setErrorMsg(error.response.data.errors.code ? error.response.data.errors.code : error.response.data.errors.program)
                    setShowMsg(true)
                    setLoading(false);
                } else {
                    console.log(error)
                    setErrorMsg(error.message)
                    setShowMsg(true)
                    setLoading(false);
                }
            });
    }


    const resetStates = () => {
        setDetails({
            day: "",
            start_time: "",
            end_time: "",
            instructor_id: "",
            course_id: "",
        })
    }
    // const allInstructors = getAllUsers.data?.filter((user)=> user.role === "instructor")
    // console.log(allInstructors)
    return (
        <div
            className="p-3 p-md-5"
            style={{ backgroundColor: "hsla(0, 0%, 85%, .3)" }}
        >
            <div className="d-flex px-2">
                <div>
                    <img src={createIcon} className='img-fluid' alt="" />
                </div>
                <div className='ms-3'>
                    <p className="fw-semibold">Create Insttructor</p>
                    {/* <p>Connect and sync your calendar events with Google Calendar</p> */}
                </div>
            </div>
            <Row>
                <Col md={9} className='mb-3'>
                    <CreateInstructorForm />
                </Col>
                <Col md={3} className='mb-3'>
                    <div className="" style={{ color: "#8A8A8A" }}>
                        <div className='d-flex mb-3 text-primary justify-content-m-between'>
                            <div>
                                <MdAddBox size={25} />
                            </div>
                            <p className='ms-2'>Require Document</p>
                        </div>
                        <div className="mb-2">
                            <button className='border rounded-3 w-100 btn bg-white text-secondary'>C.V</button>
                        </div>
                        <div className="mb-2">
                            <button className='border rounded-3 w-100 btn bg-white text-secondary'>Other related documents</button>
                        </div>
                        <div className="mb-2">
                            <button className='border rounded-3 w-100 btn bg-white text-secondary'>Aggrements</button>
                        </div>
                        {/* <div className="mt-3">
                            <h5 className='text-dark'>Guest Permission</h5>

                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="modify" />
                                <label className="form-check-label" htmlFor="modify">
                                    Modify Events
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="invites" />
                                <label className="form-check-label" htmlFor="invites">
                                    Invite others
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="guest" />
                                <label className="form-check-label" htmlFor="guest">
                                    See guest List
                                </label>
                            </div>
                        </div> */}
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default AddInstructor