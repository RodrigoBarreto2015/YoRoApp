import axios from "axios";

export default axios.create({
  baseURL: "http://ec2-52-67-124-225.sa-east-1.compute.amazonaws.com:8080/",
  mode: "cors",
  headers: {
    "Content-Type": "application/json"
  }
});

/*export default axios.create({
  baseURL: "http://192.168.100.96:8080/",
  headers: {
    "Content-Type": "application/json"
  }
});*/