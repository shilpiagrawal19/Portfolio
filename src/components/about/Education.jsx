import React from 'react'
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import SchoolIcon from '@material-ui/icons/School';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
export default function Education() {
return (
<div className="education">
<WorkOutlineIcon className="icon"/>
<span>Interships</span>
<div>
<ul>
<li>
<FiberManualRecordIcon className="icondot"/><span className="interntitle">Sysmetis IT Solution </span>
<p> Sept 2020 - Apr 2021 </p>
</li>

<li>
<FiberManualRecordIcon className="icondot"/><span className="interntitle">SNV Infotech </span>
<p> June 2019 - July 2020 </p>
</li>
</ul>
</div>

<div>
<SchoolIcon className="icon"/>
<span>Education</span>
<ul>
<li>
<FiberManualRecordIcon className="icondot"/><span className="interntitle">Bachelor Of Engieering (2016-2020)</span>
<p> Swami Vivekanand College Of Engineering <br/>CGPA : 7.8 </p>
</li>
<li>
<FiberManualRecordIcon className="icondot"/><span className="interntitle">HSSCE (2015-2016)</span>
<p> SBGM Girls H.S. School <br/>Percentage : 71 </p>
</li>
<li>
<FiberManualRecordIcon className="icondot"/><span className="interntitle">HSCE(2013-2014)</span>
<p> SBGM Girls H.S. School <br/>Percentage : 76 </p>
</li>
</ul>
</div>
</div>
)
}