import { useContext, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { ThemeContext } from "../context/ThemeContext";
import { UserContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { ResourceContext } from "../context/ResourceContext";
import InstructorCourseAnalysis from "../components/instructor/InstructorCourseAnalysis";
import FacultyScheduleStats from "../components/faculty/FacultySheduleStats";

const today = new Date();
const FacultyDashboard = () => {
  const { setSideBg } = useContext(ThemeContext);
  const { userCredentials } = useContext(UserContext);
  const {
    getAllCourses,
    setGetAllCourses,
    getAllInstructors,
    getAllInstructorsSchedules,
    setGetAllInstructorsSchedules,
    getAllSchedules,
    setGetAllSchedules, } = useContext(ResourceContext);
  const navigate = useNavigate()
  console.log(userCredentials);

  useEffect(() => {
    setGetAllCourses((prev) => {
      return {
        ...prev, isDataNeeded: true
      }
    })
  }, [])

  useEffect(() => {
    setGetAllSchedules((prev) => {
      return {
        ...prev, isDataNeeded: true
      }
    })
  }, [])


  useEffect(() => {
    setGetAllInstructorsSchedules((prev) => {
      return {
        ...prev, isDataNeeded: true
      }
    })
  }, [])

  const instructorCourses = getAllCourses.data?.filter((schedule => schedule.created_by_id == userCredentials.user.id))

  const instructorSchedules = getAllSchedules.data?.filter((schedule => schedule.instructor_id === userCredentials.user.id))

  const todaySchedules = instructorSchedules?.filter(classItem => {
    // Assuming 'classem' has a 'date' property for the class
    const classDate = new Date(classItem.day);
    // Compare year, month, Itand day to check if dates are the same
    return (classDate.getFullYear() == today.getFullYear() &&
      classDate.getMonth() == today.getMonth() &&
      classDate.getDate() == today.getDate());
  });

  // const myClasses = todaySchedules?.filter((schedule) => getEnrolledCourses.data?.some((enrollCourse) => enrollCourse.courseId == schedule.course_id))

  // console.log(myClasses);

  const strokeProps = {
    strokeCap: "round",
    strokeColor: "#0052B4",
    strokeSize: "50%",
    strokeHeight: "100px",
    strokeLabel: "32%"
  }

  const strokePropsTwo = {
    strokeCap: "round",
    strokeColor: "#AB3335",
    strokeSize: "65%",
    // strokeHeight: "100",
    strokeLabel: "Completed"
  }

  const strokePropsThree = {
    strokeCap: "round",
    strokeColor: "#0052B4",
    strokeSize: "65%",
    // strokeHeight: "100",
    strokeLabel: "Storage Used"
  }

  return (
    <div
      className="p-3 p-md-5"
      style={{ backgroundColor: "hsla(0, 0%, 85%, .1)" }}
    >
      <FacultyScheduleStats allSchedules={instructorSchedules} />
      <Col md={11}>
        <Row className="my-5 pt-5">
          <Col className="my-3 my-md-0" md={5}>
            <div className="shadow-sm h-100 rounded p-3">
              <div className="d-flex mb-4 border-bottom justify-content-between">
                <p className="my-4">Recently enrolled Students</p>
                <Link className="d-flex nav-link text-primary align-items-center">
                  <p className="fw-bold">see all</p>
                </Link>
              </div>
              {/* <div className="">
                <div className="d-flex light_sky rounded mb-2 ps-1 hover_effect align-items-center justify-content-center">
                  <div className="light_sky rounded p-1 text-primary">
                    <span className="fw-bold">AA</span>
                  </div>
                  <div className="px-2">
                    <p className="fs_sm">Adepoju Ademola</p>
                    <p className="fs_xsm">Hello, Mr John i am yet to get your class b res...</p>
                  </div>
                  <p className="fs_xsm">10:25 am</p>
                </div>
                <div className="d-flex light_sky rounded mb-2 ps-1 hover_effect align-items-center justify-content-center">
                  <div className="light_sky rounded p-1 text-primary">
                    <span className="fw-bold">AA</span>
                  </div>
                  <div className="px-2">
                    <p className="fs_sm">Adepoju Ademola</p>
                    <p className="fs_xsm">Hello, Mr John i am yet to get your class b res...</p>
                  </div>
                  <p className="fs_xsm">10:25 am</p>
                </div>
                <div className="d-flex light_sky rounded mb-2 ps-1 hover_effect align-items-center justify-content-center">
                  <div className="light_sky rounded p-1 text-primary">
                    <span className="fw-bold">TA</span>
                  </div>
                  <div className="px-2">
                    <p className="fs_sm">Adepoju Ademola</p>
                    <p className="fs_xsm">Hello, Mr John i am yet to get your class b res...</p>
                  </div>
                  <p className="fs_xsm">10:25 am</p>
                </div>
                <div className="d-flex light_sky rounded mb-2 ps-1 hover_effect align-items-center justify-content-center">
                  <div className="light_sky rounded p-1 text-primary">
                    <span className="fw-bold">AA</span>
                  </div>
                  <div className="px-2">
                    <p className="fs_sm">Adepoju Ademola</p>
                    <p className="fs_xsm">Hello, Mr John i am yet to get your class b res...</p>
                  </div>
                  <p className="fs_xsm">10:25 am</p>
                </div>
              </div> */}
            </div>
          </Col>
          <Col className="my-3 my-md-0" md={3}>
            <div className="shadow rounded h-100 p-2">
              <p className="fw-bold">Course Progress</p>
              <div className="overflow_y">
                {instructorCourses?.map((course) => (
                  <InstructorCourseAnalysis key={course.id} course={course} />
                ))}
              </div>
            </div>
          </Col>
          <Col className="my-3 my-md-0" md={4}>
            <div className="shadow h-100 p-2">
              <div className="d-flex justify-content-between">
                <p className="my-4">Upcoming Classes</p>
                <Link className="d-flex nav-link text-primary align-items-center">
                  <p className="fw-bold">see all</p>
                </Link>
              </div>
              {todaySchedules?.map((each) => {
                const day = new Date(each.day)

                return (
                  <div key={each.id} className="light_sky hover_effect my-2 rounded p-1">
                    <div className="d-flex align-items-center justify-content-center">
                      <div className="rounded p-1 px-2 text-white" style={{ backgroundColor: "#0052B4" }}>
                        <span className="fw-semibold">{day.getDate()}</span>
                      </div>
                      <div className="px-2 fw-semibold">
                        <p className="fs_sm">Meeting with :</p>
                        <p className="fs_sm">{each.title}</p>
                        <p className="fs_xsm text-info pointer text-decoration-underline"
                          onClick={() => navigate("/video_live", { state: { list: each } })}
                        >Meeting link//www.RSBPP.com.live</p>
                      </div>
                      <div className="">
                        <p className="fs_xsm">{each.start_time}</p>
                        {/* <p className="fs_xsm text-danger">Due soon</p> */}
                      </div>
                    </div>
                  </div>
                )
              })}
              {todaySchedules?.length < 1 && <p className="text-center fs-5">No live class today</p>}
            </div>
          </Col>
        </Row>
      </Col>
      {/* <div className="rounded bg-white py-5">
        <Row>
          <Col md={3}>
            <div className="border p-2 h-100 rounded">
              <p className="text-center my-2">Syllabus Overview</p>
              <RoundChart strokeProps={strokePropsTwo} />
            </div>
          </Col>
          <Col md={6} className="px-5">
            <div className="border p-2 h-100 rounded">
              <div className="d-flex justify-content-between">
                <p>Attendance Overview</p>
                <p>Jan 2024</p>
              </div>
              <BarChart />
            </div>
          </Col>
          <Col md={3}>
            <div className="border p-2 h-100 rounded">
              <p className="text-center my-2">Cloud Storage</p>
              <RoundChart strokeProps={strokePropsThree} />
            </div>
          </Col>
        </Row>
      </div> */}
    </div>
  );
};

export default FacultyDashboard;
