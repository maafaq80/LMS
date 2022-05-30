import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
];


export const SidebarDataWithDrop = [
  {
    title: 'Courses',
    path: '/dashboard/courses',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'My Courses',
        path: '/dashboard/myCourses',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Start Course',
        path: '/dashboard/startCourse',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Reports 3',
        path: '/dashboard/courses',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'My Courses',
    path: '/dashboard/team',
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Message 1',
        path: '/dashboard/team',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Message 2',
        path: '/dashboard/team',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
];
