function formatDate(date) {
  return new Date(date).toLocaleString("id-ID", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}
function isMember(UserId,CommunityId){
    return usercommunity.findOne({
        where:{
            UserId,
            CommunityId
        }
    }).then(found=>{
        return !!found
    })
}

module.exports={formatDate,isMember}
