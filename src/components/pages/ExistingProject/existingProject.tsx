import { observer } from "mobx-react";
import style from "./style.module.scss";
import { useNavigate } from "react-router-dom";
import Table from "@components/common-components/table";
import { ColTextCheck } from "@components/common-components/export-common-components/table-columns-text-check";
import folderIcon from "../../../assets/icons/folderIcon.png"
import pencilIcon from "../../../assets/icons/pencilIcon.png"
import trashIcon from "../../../assets/icons/trashIcon.png"
import uploadIcon from "../../../assets/icons/uploadIcon.png"
import styled from "styled-components";
const ExistingProject = observer(() => {
  const navigate = useNavigate();
  const dummyArray=[
    {para: 'Small Farmers of Morocco Solar Farm', citerion: '2/6 Criterion Completed', status: 'In Progress'}, 
  {para: 'Lorem ipsum dolor sit amet', citerion: '6/6 Criterion Completed', status: 'Complete'},
  {para: 'Lorem ipsum dolor sit amet', citerion: '3/6 Criterion Completed', status: 'In Progress'}, 
  {para: 'Lorem ipsum dolor sit amet', citerion: '6/6 Criterion Completed', status: 'Complete'},
]
  const columns =  [

      {
        title: 'test',
        dataIndex: 'test',
        width: 5,
        render: ()=>{
          return<img src={folderIcon}/>
        },
      },
      {
        title: 'para',
        dataIndex: 'para',
        render: (_, data)=>{
          return <div>
           <div className={style.tablepara}>{_}</div>
          </div>
        }
      },
      {
        title: 'Citerion',
        dataIndex: 'citerion',
        render: (_)=>{
          return <div className={style.cretionPara}>
            {_}
          </div>
        }
      },
      {
        title: 'test',
        dataIndex: 'test',
        render: (_, data)=>{
          return <div>
            {data?.status==='Complete'? <div  className={style.completeClass}>{data?.status}</div> : <div className={style.inprocessClass}>{data?.status}</div>}
          </div>
        }
      },

      {
        title: 'test',
        width: 25,
        render: (_, row) => {
          return (
            <div className={style.flexWrapper} >
              <img src={pencilIcon} className={style.imgClass}/>
             <img src={trashIcon} className={style.imgClass}/>
             <img src={uploadIcon} className={style.imgClass}/>
            </div>
          );
        },
      },
    ];
  return (
    <div className={style.homePagePageContainer}>
      <div className={style.responsive}>
      <div className={style.projectHeading}>My Projects</div>
      <p className={style.firstdivaragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <p  className={style.secondParahGraph}> Grade a GCF Concept Note or Proposal</p>
      {/* <div className={style.scrollClass}> */}
       <Table
        responseData={dummyArray}
        className={style.tableStyle}
        columns={columns}
        loading={false}
        checkPagination={false}
        isShowHeader= {false}
      />
      {/* </div> */}
      <p className={style.thirdPara}> Draft a GCF Concept Note or Proposal
        </p>
        <p className={style.lastPara}>Climate Rationale Advisor</p>
    </div>
    </div>
  );
});

export default ExistingProject;
