import moment from 'moment';

 export const getTimeDiffrence = (dataPosted) =>{
  const currentDate = moment()
  const postedDate = moment(dataPosted)
  const duration = moment.duration(currentDate.diff(postedDate));
  const days = Math.ceil(duration.asDays())
  const hours = Math.ceil(duration.asHours());
  const months = Math.ceil(duration.asMonths());
  return{
    days,hours,months
  }
}


export const checkImageURL = (url) => {
  if (!url) return false;
  else {
    const pattern = new RegExp(
      "^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$",
      "i"
    );
    return pattern.test(url);
  }
};