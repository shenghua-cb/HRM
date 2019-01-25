import axios from 'axios'
axios.defaults.withCredentials = true;
function fetchResumeList() {
    let fullUrl = `api/resumes`;
    return axios.get(fullUrl)
}
function fetchResumeById(resumeId) {
    let fullUrl = `api/resumes/${resumeId}`;
    return axios.get(fullUrl)
}
function fetchStarsByResumeId(resumeId) {
    let fullUrl = `api/resume_settings/${resumeId}`;
    return axios.get(fullUrl)
}
export { fetchResumeList, fetchResumeById, fetchStarsByResumeId }