import React, { useContext } from 'react'
import { assets, songsData } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'
function Player() {
    const { seekBg, seekBar, playStatus, Play, Pause,track,time } = useContext(PlayerContext)
    return (
        <>
            <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">
                <div className="hidden lg:flex items-center gap-4">
                    <img className='w-12' src={track.image} alt="" />
                    <div className="">
                        <p> {track.name}</p>
                        <p>{track.desc.slice(0, 12)}</p>
                    </div>
                </div>
                <div className="flex flex-col items-center ap-1 m-auto">
                    <div className="flex gap-4">
                        <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="" />
                        <img className='w-4 cursor-pointer' src={assets.prev_icon} alt="" />
                        {!(playStatus )?
                            <img onClick={Play} className='w-4 cursor-pointer' src={assets.play_icon} alt="" />
                            :
                            <img onClick={Pause} className='w-4 cursor-pointer' src={assets.pause_icon} alt="" />
                        }
                        <img className='w-4 cursor-pointer' src={assets.next_icon} alt="" />
                        <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="" />
                    </div>
                    <div className="flex items-center gap-5">
                        <p>{time.currentTime.minute}:{time.currentTime.second}</p>
                        <div ref={seekBg} className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full  cursor-pointer">
                            <hr ref={seekBar} className='h-1 border-none w-0 bg-red-800 rounded-full' />
                        </div>
                        <p>{time.totalTime.minute}:{time.totalTime.second}</p>
                    </div>
                </div>
                <div className="hidden lg:flex items-center gap-2 opacity-75">
                    <img src={assets.play_icon} alt="" className='w-4' />
                    <img src={assets.mic_icon} alt="" className='w-4' />
                    <img src={assets.queue_icon} alt="" className='w-4' />
                    <img src={assets.speaker_icon} alt="" className='w-4' />
                    <img src={assets.volume_icon} alt="" className='w-4' />
                    <div className="w-20 bg-slate-50 h-1 rounded"></div>
                    <img src={assets.mini_player_icon} alt="" className='w-4' />
                    <img src={assets.zoom_icon} alt="" className='w-4' />
                </div>
            </div>
        </>
    )
}

export default Player