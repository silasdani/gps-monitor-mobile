import moment from "moment";
// eslint-disable-next-line
export default {
  track: {
    secondsToHms: (d) => {
      if (d === 0) return "0 seconds";
      d = Number(d);
      var h = Math.floor(d / 3600);
      var m = Math.floor((d % 3600) / 60);
      var s = Math.floor((d % 3600) % 60);

      var hDisplay = h > 0 ? h + (h === 1 ? " hour, " : " hours, ") : "";
      var mDisplay = m > 0 ? m + (m === 1 ? " minute, " : " mins, ") : "";
      var sDisplay = s > 0 ? s + (s === 1 ? " second" : " seconds") : "";
      return hDisplay + mDisplay + sDisplay;
    },
  },
  tracks: {
    filterTracksByDate: (records, dates) => {
      var filteredTracks = records.filter(
        (el) =>
          moment(dates.dateFrom).isBefore(moment(el.attributes.date)) &&
          moment(el.attributes.date).isBefore(moment(dates.dateTo))
      );

      return filteredTracks;
    },
  },
};
