import toastr from "toastr";

const toastrSuccess = (message, title) => {
  toastr.clear();
  toastr.options = {
    positionClass: "toast-top-full-width",
    timeOut: 3000,
    extendedTimeOut: 1000,
    closeButton: true,
    closeDuration: 10
  };

  toastr.success(message, title);
};

const toastrWarning = (message, title) => {
  toastr.clear();

  toastr.warning(message, title);
};

const toastrError = (message, title) => {
  toastr.remove();
  toastr.options = {
    positionClass: "toast-top-full-width",
    timeOut: 0,
    extendedTimeOut: 0,
    closeButton: true,
    closeDuration: 10
  };

  toastr.error(message, title);
};

const removeToastr = () => {
  toastr.clear();
};

export { toastrError, toastrWarning, toastrSuccess, removeToastr };
