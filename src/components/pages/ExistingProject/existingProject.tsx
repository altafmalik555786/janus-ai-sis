import { observer } from "mobx-react";
import style from "./style.module.scss";
import { useNavigate } from "react-router-dom";
import Table from "@components/common-components/table";
import { ColTextCheck } from "@components/common-components/export-common-components/table-columns-text-check";
import folderIcon from "../../../assets/icons/folderIcon.png";
import pencilIcon from "../../../assets/icons/pencilIcon.png";
import trashIcon from "../../../assets/icons/trashIcon.png";
import uploadIcon from "../../../assets/icons/uploadIcon.png";
import styled from "styled-components";
import { useEffect, useState } from "react";
import ProjectDeleteModelData from "./projectDeleteModel";
import { useStore } from "@stores/root-store";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const ExistingProject = observer(() => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const antIcon = (
    <LoadingOutlined style={{ fontSize: 16, color: "#121212" }} spin />
  );
  const {
    user: {
      loadGetExistingProject,
      projectDelete,
      generateReport,
      getProjectListData,
      getLoadingGenerateReport,
      getLoadingExistingProject,
      getLoadingDeleteRecord,
    },
  } = useStore(null);
  const [openModel, setOpenModel] = useState(false);
  const [projectData, setProjectData] = useState([]);
  const [downloadLoading, setDownloadLoading] = useState("");
  const handleLoadProject = async () => {
    setProjectData([]);
    const result = await loadGetExistingProject(navigate);
    const dummyArray = [];
    result?.projects["concept note"]?.forEach((item) => {
      dummyArray?.push({ projectName: item });
    });
    setProjectData(dummyArray);
  };
  const deleteProjectData = async () => {
    const payload = {
      project_name: data?.projectName,
      functionality: "concept note",
    };
    const res = await projectDelete(payload, navigate);
    if (
      res?.error?.includes("Invalid token") ||
      res?.error?.includes("Token has expired")
    ) {
    } else {
      handleLoadProject();
      setOpenModel(false);
    }
  };
  const handleGenerateReport = async (data) => {
    const payload = {
      project_name: data?.projectName,
      functionality: "concept note",
    };
    const result = await generateReport(payload, navigate);
    const blob = new Blob([result], { type: "application/pdf" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = "project.pdf";
    document.body.appendChild(link);
    link.click();
    setDownloadLoading("");
  };
  useEffect(() => {
    handleLoadProject();
  }, []);

  const columns = [
    {
      title: "test",
      dataIndex: "test",
      width: 5,
      render: () => {
        return <img src={folderIcon} />;
      },
    },
    {
      title: "para",
      dataIndex: "projectName",
      render: (_, data) => {
        return (
          <div>
            <div className={style.tablepara}>{_}</div>
          </div>
        );
      },
    },
    // {
    //   title: 'Citerion',
    //   dataIndex: 'citerion',
    //   render: (_)=>{
    //     return <div className={style.cretionPara}>
    //       {_}
    //     </div>
    //   }
    // },
    {
      title: "test",
      dataIndex: "test",
      render: (_, data) => {
        return (
          <div>
            {data?.status === "Complete" ? (
              <div className={style.completeClass}>{data?.status}</div>
            ) : (
              <div className={style.inprocessClass}>{"In Progress"}</div>
            )}
          </div>
        );
      },
    },

    {
      title: "test",
      width: 25,
      render: (_, data) => {
        return (
          <div className={style.flexWrapper}>
            <img src={pencilIcon} className={style.imgClass} />
            <img
              src={trashIcon}
              className={style.imgClass}
              onClick={() => {
                setData(data);
                setOpenModel(true);
              }}
            />
            {downloadLoading == data?.projectName ? (
              <Spin indicator={antIcon} />
            ) : (
              <img
                style={{
                  pointerEvents: downloadLoading == data?.projectName ? "none" : "auto",
                }}
                src={uploadIcon}
                className={style.imgClass}
                onClick={() => {
                  setDownloadLoading(data?.projectName);
                  handleGenerateReport(data);
                }}
              />
            )}
          </div>
        );
      },
    },
  ];
  return (
    <>
      <div className={style.homePagePageContainer}>
        <div className={style.responsive}>
          <div className={style.projectHeading}>My Projects</div>
          <p className={style.firstdivaragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className={style.secondParahGraph}>
            {" "}
            Grade a GCF Concept Note or Proposal
          </p>
          <div className={style.responsiveTable}>
            <Table
              dataSource={projectData}
              className={style.tableStyle}
              columns={columns}
              loading={getLoadingExistingProject}
              checkPagination={false}
              isShowHeader={false}
            />
          </div>
          {projectData?.length ? (
            projectData?.map((item, index) => {
              return (
                <p key={index} className={style.thirdPara}>
                  {item?.projectName}
                </p>
              );
            })
          ) : (
            <p className={style.thirdPara}>
              Draft a GCF Concept Note or Proposal
            </p>
          )}
          <p className={style.lastPara}>Climate Rationale Advisor</p>
        </div>
        <ProjectDeleteModelData
          loading={getLoadingDeleteRecord}
          isOpen={openModel}
          closeModal={() => setOpenModel(false)}
          onDeleteRecord={deleteProjectData}
        />
      </div>
    </>
  );
});

export default ExistingProject;
