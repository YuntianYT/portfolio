import ProjectItem from './ProjectItem';

function Projects() {
  return (
    <>
      <ProjectItem
        title='Spotitube'
        description='A Spotify looks like YouTube! It offers a fresh and exciting way to discover and enjoy music.'
        link='/spotitube'
        imgURI='projects/spotitube/spotitube.jpg'
      />
      <ProjectItem
        title='Leetcode Solutions'
        description='This app is built using Next.js and features a unique approach to helping coders tackle LeetCode problems.'
        link='/leetcode'
        imgURI='projects/leetcode/leetcode.jpg'
        reverse={true}
      />
      <ProjectItem
        title='Application Tracker'
        description='This application aimed to track my job application process and provide real-time updates.'
        link='/application'
        imgURI='projects/application/application.jpg'
      />
      <ProjectItem
        title='Data Platform Management Console'
        description='This is the project that I worked at Geotab. It provides an intuitive and streamlined user experience for all data platform services.'
        link='/dpmc'
        imgURI='projects/DPMC.jpg'
        reverse={true}
      />
    </>
  );
}

export default Projects;
