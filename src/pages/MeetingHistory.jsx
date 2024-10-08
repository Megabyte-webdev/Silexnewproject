import React, { useContext, useEffect } from 'react'
import THead from '../components/general/THead'
import MeetingRow from '../components/faculty/MeetingRow'
import { ResourceContext } from '../context/ResourceContext'
import { UserContext } from '../context/AuthContext'
import Loading from "../components/loader/Loading"

const MeetingHistory = () => {
    const { getAllCourses,
        setGetAllCourses,
        setGetAllInstructors,
        getAllInstructors,
        getAllInstructorsSchedules,
        setGetAllInstructorsSchedules, } = useContext(ResourceContext)

        // const handleRefresh = () => {
        //     window.location.reload();
        // };
    // useEffect(() => {
    //    handleRefresh
    // }, [])

    const { userCredentials } = useContext(UserContext)
    const userInfo = userCredentials?.user
    useEffect(() => {
        setGetAllInstructors((prev) => {
            return {
                ...prev, isDataNeeded: true
            }
        })
    }, [])

    useEffect(() => {
        setGetAllCourses((prev) => {
            return {
                ...prev, isDataNeeded: true
            }
        })
    }, [])
    // useEffect(() => {
    //     setGetAllInstructorsSchedules((prev) => {
    //         return {
    //             ...prev, isDataNeeded: true
    //         }
    //     })
    // }, [])

    const myCourses = getAllCourses.data?.filter((course) => course.created_by_id == userInfo.id)
    // const mySchedules = getAllSchedules.data?.filter((course) => course.instructor_id == userInfo.id)

    const mySchedules = getAllInstructorsSchedules.data?.sort((a, b) => {
        // const smaller = new Date(a.day)
        // const biggerr = new Date(b.day)
        // return smaller - biggerr
        return b.id - a.id
    })

    console.log(userInfo.id)
    console.log(mySchedules)

    const userData = getAllInstructors.data?.find((instructor) => instructor.user_id == userInfo.id)
    // console.log(myCourses)
    // console.log(mySchedules)
    return (
        <div>
            <div
                className="p-3 p-md-5 min-vh-100"
                style={{ backgroundColor: "hsla(0, 0%, 85%, .1)" }}
            >
                <p>List of all Meeting History</p>
                {getAllInstructorsSchedules.data && (
                    <div className="p-2 bg-white shadow-sm rounded my-3">
                        {/* <div className="overflow_y_md_50 overflow_y_80"> */}
                        <div className="mt-4 table-responsive-md">
                            <table className="table roboto table-hover">
                                <thead>
                                    <tr>
                                        <THead name="Host" />
                                        <THead name="Type" />
                                        <THead name="Meeting Code" />
                                        <THead name="Started at" />
                                        <THead name="Ended at" />
                                        <THead name="Participants" />
                                        <THead name="Action" />
                                    </tr>
                                </thead>
                                <tbody>
                                    {mySchedules?.map((list) => {
                                        const oneCourse = myCourses?.find((item) => item.id === list.course_id);
                                        // console.log(oneCourse)
                                        return (
                                            <MeetingRow key={list.id} oneCourse={oneCourse} list={list} userData={userData} />
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                        {/* </div> */}
                    </div>
                )}
                {!getAllInstructorsSchedules.data && (
                    <Loading />
                )}

            </div>
        </div>
    )
}

export default MeetingHistory