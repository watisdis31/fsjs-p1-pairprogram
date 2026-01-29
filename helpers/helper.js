function formatDate(date){
    return new Date(date).toLocaleString()
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