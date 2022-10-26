import React, { useEffect } from 'react'
import { useAuthState } from "react-firebase-hooks/auth"
import { login, logout } from '../../app/store/userSlice';
import Navbar from '../Home/HomeNavbar'
import profileImage from "../../assets/profile.webp";
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../app/store/userSlice';
import { signOut } from 'firebase/auth';
import { auth } from '../../app/firebaseInit';

const style = {
  container: `flex justify-center items-center min-h-screen`,
  wrapper: `mx-4 md:mx-0 md:min-w-[45vw]`,
  title: `font-graph font-semibold text-3xl md:text-4xl selection:bg-white selection:text-red border-b border-slate-600 border-opacity-40 pb-1`,
  contentWrapper: `flex justify-center space-x-4 pt-4`,
  leftContent: `flex-[2]`,
  rightContent: `flex-[8] font-graph`,
  profileImage: `md:w-28 md:h-2w-28 select-none`,
  emailSection: `py-3 px-5 bg-stone-400 text-sm md:text-base selection:bg-white selection:text-red`,
  plansTitle: `font-semibold text-sm pt-5 md:pt-8 md:text-xl border-b border-slate-600 border-opacity-40 pb-1 select-none`,
  renewalDate: `text-xs md:text-sm text-stone-400 pt-5 select-none`,
  plansContainer: `py-4 px-2 md:py-5 md:px-4 select-none`,
  plansContentWrapper: `flex justify-between py-4`,
  planTextWrapper: `text-stone-400`,
  planTitle: `text-sm`,
  planSubtitle: `font-light text-xs pt-1`,
  subscribeBtn: `px-4 rounded bg-red font-semibold text-xs active:bg-opacity-80`,
  currentPackageBtn: `px-3 rounded bg-stone-400 font-semibold text-xs`,
  signOutBtn: `bg-red w-full py-3 rounded font-semibold text-sm mt-3 md:mt-4 active:bg-opacity-80 select-none`,
}

const ProfileScreen = () => {
  const user = useSelector(selectUser)
  const [userAuth] = useAuthState(auth)
  const dispatch = useDispatch()

  useEffect(() => {
    if(userAuth) {
      dispatch(login({
        uid: userAuth.uid,
        email: userAuth.email
      }))
    } else {
      dispatch(logout)
    }
  }, [dispatch, userAuth])

  return (
    <div>
      <Navbar />
      <div className={style.container}>
        <div className={style.wrapper}>
          <h1 className={style.title}>Edit Profile</h1>
          <div className={style.contentWrapper}>
            <div className={style.leftContent}>
              <img 
                src={profileImage} 
                alt="profile-img"
                className={style.profileImage}
              />
            </div>
            <div className={style.rightContent}>
              <div className={style.emailSection}>
                {user && user.email}
              </div>
              <h3 className={style.plansTitle}>Plans (Current Plan: premium)</h3>
              <h4 className={style.renewalDate}>Renewal date: 04/12/2022</h4>
              <div className={style.plansContainer}>
                <div className={style.plansContentWrapper}>
                  <div className={style.planTextWrapper}>
                    <h5 className={style.planTitle}>Netflix Standard</h5>
                    <p className={style.planSubtitle}>1080p</p>
                  </div>
                  <button className={style.subscribeBtn}>
                    Subscribe
                  </button>
                </div>
                <div className={style.plansContentWrapper}>
                  <div className={style.planTextWrapper}>
                    <h5 className={style.planTitle}>Netflix Basic</h5>
                    <p className={style.planSubtitle}>480p</p>
                  </div>
                  <button className={style.subscribeBtn}>
                    Subscribe
                  </button>
                </div>
                <div className={style.plansContentWrapper}>
                  <div className={style.planTextWrapper}>
                    <h5 className={style.planTitle}>Netflix Premium</h5>
                    <p className={style.planSubtitle}>4K+HDR</p>
                  </div>
                  <button className={style.currentPackageBtn}>
                    Current Package
                  </button>
                </div>
              </div>
              <button 
                className={style.signOutBtn}
                onClick={() => signOut(auth)}
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen  