export interface tweet {
  name:string
  handle: string
  timeposted:number
  tweet:string
  replycount:number
  repostcount:number
  viewcount:number
  likecount:number
  tweetimage:string
}


export interface tweetreply{
  name:string
  handle: string
  replyingtohandle:string
  timeposted:number
  tweetreply:string



}

export interface follow{
  name:string
  handle:string
  timefollowed:number
}
