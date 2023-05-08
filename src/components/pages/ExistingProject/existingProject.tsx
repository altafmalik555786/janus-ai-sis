import { observer } from "mobx-react";
import style from "./style.module.scss";
import { useNavigate } from "react-router-dom";
import folderIcon from "../../../assets/icons/folderIcon.png";
import pencilIcon from "../../../assets/icons/edit-2.svg";
import trashIcon from "../../../assets/icons/trash-2.svg";
import uploadIcon from "../../../assets/icons/upload.svg";
import { useEffect, useState } from "react";
import ProjectDeleteModelData from "./projectDeleteModel";
import { useStore } from "@stores/root-store";
import { Spin, Table } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { constRoute } from "@utils/route";
import { getAuthorizationHeader } from "@api/common-utils";
import { baseUrl } from "@api/const";
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
      getSingleProjectData,
      getLoadingExistingProject,
      getLoadingDeleteRecord,
      setProjectName,
    },
  } = useStore(null);
  const [openModel, setOpenModel] = useState(false);
  const [projectData, setProjectData] = useState(null);
  const [downloadLoading, setDownloadLoading] = useState("");
  const [editLoading, setEditLoading] = useState("");
  const handleLoadProject = async () => {
    setProjectData(null);
    const result = await loadGetExistingProject(navigate);
    const dummyArray = [];
    result?.projects["concept note"]?.forEach((item) => {
      dummyArray?.push({ projectName: item });
    });
    setProjectData({ conceptNote: dummyArray, grading: [] });
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
  function download(blob, filename) {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }
  const handleGenerateReport = async (data) => {
    const payload = {
      project_name: data?.projectName,
      functionality: "concept note",
    };
    await fetch(`${baseUrl}/generateReport`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: getAuthorizationHeader(),
      },
      body: JSON.stringify(payload),
    }).then((response) => {
      response.blob().then((blob) => download(blob, "project"));
    });

    // await generateReport(payload, navigate).then(response => {response.blob().then(blob => download(blob, 'project'))});
    // const blob = new Blob([result], { type: "application/pdf" });
    // const link = document.createElement("a");
    // link.href = window.URL.createObjectURL(blob);
    // link.download = "project.pdf";
    // document.body.appendChild(link);
    // link.click();
    setDownloadLoading("");
  };
  useEffect(() => {
    handleLoadProject();
  }, []);
  const handleGetData = async (item) => {
    setProjectName(item?.projectName);
    const payload = {
      project_name: item?.projectName,
      section: "B_1_0",
      functionality: "concept note",
    };
    await getSingleProjectData(payload, navigate);
    setEditLoading("");
    localStorage.setItem("projectName", item?.projectName);
    localStorage.setItem('currentPage', '/home')
    navigate(constRoute?.contextAndBaselineForm, {
      state: { projectName: item?.projectName, isEdit: true },
    });
  };
  const columns = [
    {
      title: "",
      dataIndex: "test",
      width: 5,
      render: () => {
        return <img src={folderIcon} />;
      },
    },
    {
      title: "",
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
      title: "",
      dataIndex: "status",
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
      title: "",
      width: 25,
      render: (_, data) => {
        return (
          <div className={style.flexWrapper}>
            {editLoading === data?.projectName ? (
              <Spin indicator={antIcon} />
            ) : (
              <img
                src={pencilIcon}
                className={style.imgClass}
                onClick={() => {
                  setEditLoading(data?.projectName);
                  handleGetData(data);
                  // navigate(constRoute?.contextAndBaselineForm, { state: { projectName: data?.projectName, isEdit: true} })
                }}
              />
            )}
            <img
              src={trashIcon}
              className={style.imgClass}
              onClick={() => {
                setData(data);
                setOpenModel(true);
              }}
            />
            {downloadLoading === data?.projectName ? (
              <Spin indicator={antIcon} />
            ) : (
              <img
                style={{
                  pointerEvents:
                    downloadLoading === data?.projectName ? "none" : "auto",
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
          Find all the project you've created below.
          </p>
          <p className={style.secondParahGraph}>
            {" "}
            Grade a GCF Concept Note or Proposal
          </p>
          <div className={style.responsiveTable}>
            <Table
              dataSource={projectData?.grading || []}
              className={style.tableStyle}
              columns={columns}
              loading={getLoadingExistingProject}
            />
          </div>
          <p className={style.thirdPara}>
            Draft a GCF Concept Note or Proposal
          </p>
          <div className={style.responsiveTable}>
            <Table
              dataSource={projectData?.conceptNote || []}
              className={style.tableStyle}
              columns={columns}
              loading={getLoadingExistingProject}
              pagination={false}
            />
          </div>
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
