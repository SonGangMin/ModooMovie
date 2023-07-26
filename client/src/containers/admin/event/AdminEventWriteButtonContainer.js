import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  updateEvent,
  writeEvent,
} from "../../../modules/admin/admineventwrite";
import AdminEventWriteButtonComponent from "../../../components/admin/event/AdminEventWriteButtonComponent";

const AdminEventWriteButtonContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    categoryId,
    eventTitle,
    eventContent,
    eventImg,
    startEventDate,
    endEventDate,
    adminevent,
    error,
    userId,
    originalEventNum,
  } = useSelector(({admineventwrite, user}) => ({
    categoryId: admineventwrite.categoryId,
    eventTitle: admineventwrite.eventTitle,
    eventContent: admineventwrite.eventContent,
    eventImg: admineventwrite.eventImg,
    startEventDate: admineventwrite.startEventDate,
    endEventDate: admineventwrite.endEventDate,
    adminevent: admineventwrite.adminevent,
    error: admineventwrite.error,
    userId: user.user?.id,
    originalEventNum: admineventwrite.originalEventNum,
  }));

  const onPublish = () => {
    if (originalEventNum) {
      dispatch(
        updateEvent({
          eventNum: originalEventNum,
          categoryId,
          eventTitle,
          eventContent,
          eventImg,
          startEventDate,
          endEventDate,
        })
      );
      return;
    } else {
      dispatch(
        writeEvent({
          categoryId,
          eventTitle,
          eventContent,
          eventImg,
          startEventDate,
          endEventDate,
          userId,
        })
      );
    }
  };

  const onCancel = () => {
    navigate(-1);
  };

  const isEdit = !!originalEventNum;

  useEffect(() => {
    if (adminevent && Object.keys(adminevent).length > 0) {
      navigate("/admin/event");
    }
    if (error) {
      console.log("AdminEventWriteButtonContainer Error", error);
    }
  }, [navigate, adminevent, error]);
  console.log("ddddddddddddd", adminevent);
  return (
    <AdminEventWriteButtonComponent
      onPublish={onPublish}
      onCancel={onCancel}
      isEdit={isEdit}
    />
  );
};

export default AdminEventWriteButtonContainer;
