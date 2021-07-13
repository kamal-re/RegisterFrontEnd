import React, {  useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { Table,Form } from 'antd';
import axios from 'axios'
import { Link,useHistory, useParams } from 'react-router-dom';
const Demo = () => {
  const [form] = Form.useForm();
  const history = useHistory();
  
  
  const [Items,setItems] = useState([
    form.setFieldsValue({
    user:"",
    qualification:'',
    coach_blog:'',
    coach_desc:''
    })
  ]);
  
  useEffect((key)=>{
    axios.get('http://localhost:3200/coach')
    .then(res=>{
      console.log(res.data)
        setItems(res.data)
    })
    .catch(function (error) {
      console.log(error);
  });
  },[]);
  const columns = [
    {
      title:'User',
      dataIndex:'user',
      key:'user'
    },
    {
      title:'Qualification',
      dataIndex:'qualification',
      key:'qualification'
    },
    {
      title:'Coach_blog',
      dataIndex:'coach_blog',
      key:'coach_blog'
    },
    {
      title:'Coach_desc',
      dataIndex:'coach_desc',
      key:'coach_desc'
    },
  ]
  const params=useParams()
  const onRow = (key) =>({
    onClick: () => 
      history.push(`/Coach_form/${key._id}/${key.user}/${key.qualification}/${key.coach_blog}/${key.coach_desc}/${params['coachId']|| ''}`,
      {
       }),
  })
  return (
    <>
      <Link to={'/Coach_form'} className="nav-link">Create</Link>
      <Table dataSource={Items} columns={columns} onRow={onRow}/>
    </>
  );
};
export default Demo;