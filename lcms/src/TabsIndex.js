import React, { Component } from 'react';

import TabsActionClick from './TabsComponent/TabsClick';
import TabsActionClickFixed from './TabsComponent/TabsClickFixed'

require('./assets/styles/styles.css');


class TabIndex extends Component {
  render() {
    return (
    <div>
          <h2>Basic Tabs</h2>
          <TabsActionClick>
            <div label="Tab 1">
              <p>Hi, this is the first tab.</p>
            </div>
            <div label="Tab 2">
              <p>This is the 2nd tab.</p>
            </div>
            <div label="Tab 3">
              <p>And this is the 3rd tab.</p>
            </div>
          </TabsActionClick>
          <h2>Variable Height Tabs</h2>
          <TabsActionClick>
            <div label="Tab 1">
              <p>Hi, this is the first tab.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam augue nunc, semper vel felis quis, suscipit feugiat turpis. Suspendisse potenti. In in tellus vehicula magna dapibus tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus mauris dui, ultrices in elit nec, condimentum vestibulum augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse rutrum vehicula libero, non gravida orci viverra eu. In pharetra nisi neque, eget semper ex viverra et. Vivamus a sem elementum, lacinia diam in, convallis ex. Proin velit diam, blandit non pulvinar vitae, gravida sed lectus. Nulla blandit, nisl non auctor luctus, nibh justo posuere velit, at blandit ligula tellus vitae tellus. Donec a semper metus, vitae vestibulum turpis. Suspendisse sed posuere mauris, convallis egestas est. Aliquam erat volutpat.  </p>
            </div>
            <div label="Tab 2">
              <p>This is the 2nd tab.</p>
              <p>Proin imperdiet dolor in vulputate dapibus. Cras lobortis luctus lacus. Ut luctus velit nec ex hendrerit volutpat. Maecenas et tellus nec enim tincidunt aliquet eget sit amet velit. Praesent lobortis nulla non tortor interdum, a ullamcorper arcu sagittis. Etiam eget nulla finibus, sagittis enim non, egestas nisl. Nulla eleifend ex eu accumsan malesuada. Duis ornare aliquam lectus ut scelerisque. Praesent et odio risus. Nulla augue lectus, auctor sit amet tempus id, tincidunt tristique justo. Curabitur velit turpis, interdum tincidunt sollicitudin a, iaculis ut nunc. Pellentesque sit amet pulvinar est. Phasellus tincidunt arcu id quam rhoncus pulvinar.</p>
              <p>Proin eget mauris neque. Aenean id urna sit amet magna tincidunt gravida. Phasellus ultrices a diam vel consequat. Etiam pharetra erat vel fringilla pharetra. Proin posuere viverra quam, id finibus erat porttitor id. Vivamus elementum, orci eget viverra suscipit, arcu risus dictum arcu, vitae faucibus nisi ex mattis quam. Nam semper quis risus ac fermentum. Donec sodales massa et risus sagittis, faucibus porttitor felis tincidunt. Aenean ac pulvinar metus. Praesent viverra suscipit ipsum eget aliquam.</p>
              <p>Maecenas ut scelerisque risus, aliquam porttitor diam. Sed facilisis sagittis tellus condimentum vestibulum. Duis non malesuada dolor, vitae scelerisque dolor. Aenean ut est eget nibh pulvinar luctus. Aliquam feugiat non justo non fermentum. Vivamus id erat euismod, mattis nulla quis, mollis lacus. Donec enim nulla, elementum et augue at, rhoncus egestas velit. In et dui sit amet tellus pulvinar volutpat. Praesent luctus ullamcorper ipsum, in ullamcorper enim elementum nec. Phasellus imperdiet, leo sit amet fermentum mattis, ipsum dolor placerat tellus, in gravida turpis sapien at magna. Nullam accumsan est in aliquet vulputate. Praesent ornare ex eget justo sollicitudin, id hendrerit tortor dictum. Vivamus eget facilisis orci. Ut quis dapibus leo. Aenean congue leo in sem porttitor, in suscipit urna fringilla.</p>
            </div>
            <div label="Tab 3">
              <p>And this is the 3rd tab.</p>
              <p>Proin eget mauris neque. Aenean id urna sit amet magna tincidunt gravida. Phasellus ultrices a diam vel consequat. Etiam pharetra erat vel fringilla pharetra. Proin posuere viverra quam, id finibus erat porttitor id. Vivamus elementum, orci eget viverra suscipit, arcu risus dictum arcu, vitae faucibus nisi ex mattis quam. Nam semper quis risus ac fermentum. Donec sodales massa et risus sagittis, faucibus porttitor felis tincidunt. Aenean ac pulvinar metus. Praesent viverra suscipit ipsum eget aliquam.</p>
              <p>Maecenas ut scelerisque risus, aliquam porttitor diam. Sed facilisis sagittis tellus condimentum vestibulum. Duis non malesuada dolor, vitae scelerisque dolor. Aenean ut est eget nibh pulvinar luctus. Aliquam feugiat non justo non fermentum. Vivamus id erat euismod, mattis nulla quis, mollis lacus. Donec enim nulla, elementum et augue at, rhoncus egestas velit. In et dui sit amet tellus pulvinar volutpat. Praesent luctus ullamcorper ipsum, in ullamcorper enim elementum nec. Phasellus imperdiet, leo sit amet fermentum mattis, ipsum dolor placerat tellus, in gravida turpis sapien at magna. Nullam accumsan est in aliquet vulputate. Praesent ornare ex eget justo sollicitudin, id hendrerit tortor dictum. Vivamus eget facilisis orci. Ut quis dapibus leo. Aenean congue leo in sem porttitor, in suscipit urna fringilla.</p>
            </div>
          </TabsActionClick>
          <h2>Fixed Height Tabs</h2>
          <TabsActionClickFixed>
            <div label="Tab 1">
              <p>Hi, this is the first tab.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam augue nunc, semper vel felis quis, suscipit feugiat turpis. Suspendisse potenti. In in tellus vehicula magna dapibus tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus mauris dui, ultrices in elit nec, condimentum vestibulum augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse rutrum vehicula libero, non gravida orci viverra eu. In pharetra nisi neque, eget semper ex viverra et. Vivamus a sem elementum, lacinia diam in, convallis ex. Proin velit diam, blandit non pulvinar vitae, gravida sed lectus. Nulla blandit, nisl non auctor luctus, nibh justo posuere velit, at blandit ligula tellus vitae tellus. Donec a semper metus, vitae vestibulum turpis. Suspendisse sed posuere mauris, convallis egestas est. Aliquam erat volutpat.  </p>
            </div>
            <div label="Tab 2">
              <p>This is the 2nd tab.</p>
              <p>Proin imperdiet dolor in vulputate dapibus. Cras lobortis luctus lacus. Ut luctus velit nec ex hendrerit volutpat. Maecenas et tellus nec enim tincidunt aliquet eget sit amet velit. Praesent lobortis nulla non tortor interdum, a ullamcorper arcu sagittis. Etiam eget nulla finibus, sagittis enim non, egestas nisl. Nulla eleifend ex eu accumsan malesuada. Duis ornare aliquam lectus ut scelerisque. Praesent et odio risus. Nulla augue lectus, auctor sit amet tempus id, tincidunt tristique justo. Curabitur velit turpis, interdum tincidunt sollicitudin a, iaculis ut nunc. Pellentesque sit amet pulvinar est. Phasellus tincidunt arcu id quam rhoncus pulvinar.</p>
            </div>
            <div label="Tab 3">
              <p>And this is the 3rd tab.</p>
              <p>Proin eget mauris neque. Aenean id urna sit amet magna tincidunt gravida. Phasellus ultrices a diam vel consequat. Etiam pharetra erat vel fringilla pharetra. Proin posuere viverra quam, id finibus erat porttitor id. Vivamus elementum, orci eget viverra suscipit, arcu risus dictum arcu, vitae faucibus nisi ex mattis quam. Nam semper quis risus ac fermentum. Donec sodales massa et risus sagittis, faucibus porttitor felis tincidunt. Aenean ac pulvinar metus. Praesent viverra suscipit ipsum eget aliquam.</p>
            </div>
          </TabsActionClickFixed>
          <h2>Selected Tab</h2>
          <TabsActionClick>
            <div label="Tab 1">
              <p>Hi, this is the first tab.</p>
            </div>
            <div label="Tab 2">
              <p>This is the 2nd tab.</p>
            </div>
            <div label="Tab 3">
              <p>And this is the 3rd tab.</p>
            </div>
          </TabsActionClick>
          <h2>Fade transition Tab</h2>
          <TabsActionClick>
            <div label="Tab 1">
              <p>Hi, this is the first tab.</p>
              <p>Proin eget mauris neque. Aenean id urna sit amet magna tincidunt gravida. Phasellus ultrices a diam vel consequat. Etiam pharetra erat vel fringilla pharetra. Proin posuere viverra quam, id finibus erat porttitor id. Vivamus elementum, orci eget viverra suscipit, arcu risus dictum arcu, vitae faucibus nisi ex mattis quam. Nam semper quis risus ac fermentum. Donec sodales massa et risus sagittis, faucibus porttitor felis tincidunt. Aenean ac pulvinar metus. Praesent viverra suscipit ipsum eget aliquam.</p>
            </div>
            <div label="Tab 2">
              <p>This is the 2nd tab.</p> 
              <p>Proin eget mauris neque. Aenean id urna sit amet magna tincidunt gravida. Phasellus ultrices a diam vel consequat. Etiam pharetra erat vel fringilla pharetra. Proin posuere viverra quam, id finibus erat porttitor id. Vivamus elementum, orci eget viverra suscipit, arcu risus dictum arcu, vitae faucibus nisi ex mattis quam. Nam semper quis risus ac fermentum. Donec sodales massa et risus sagittis, faucibus porttitor felis tincidunt. Aenean ac pulvinar metus. Praesent viverra suscipit ipsum eget aliquam.</p>
              <p>Maecenas ut scelerisque risus, aliquam porttitor diam. Sed facilisis sagittis tellus condimentum vestibulum. Duis non malesuada dolor, vitae scelerisque dolor. Aenean ut est eget nibh pulvinar luctus. Aliquam feugiat non justo non fermentum. Vivamus id erat euismod, mattis nulla quis, mollis lacus. Donec enim nulla, elementum et augue at, rhoncus egestas velit. In et dui sit amet tellus pulvinar volutpat. Praesent luctus ullamcorper ipsum, in ullamcorper enim elementum nec. Phasellus imperdiet, leo sit amet fermentum mattis, ipsum dolor placerat tellus, in gravida turpis sapien at magna. Nullam accumsan est in aliquet vulputate. Praesent ornare ex eget justo sollicitudin, id hendrerit tortor dictum. Vivamus eget facilisis orci. Ut quis dapibus leo. Aenean congue leo in sem porttitor, in suscipit urna fringilla.</p>
            </div>
            <div label="Tab 3">
              <p>And this is the 3rd tab.</p> 
              <p>Proin eget mauris neque. Aenean id urna sit amet magna tincidunt gravida. Phasellus ultrices a diam vel consequat. Etiam pharetra erat vel fringilla pharetra. Proin posuere viverra quam, id finibus erat porttitor id. Vivamus elementum, orci eget viverra suscipit, arcu risus dictum arcu, vitae faucibus nisi ex mattis quam. Nam semper quis risus ac fermentum. Donec sodales massa et risus sagittis, faucibus porttitor felis tincidunt. Aenean ac pulvinar metus. Praesent viverra suscipit ipsum eget aliquam.</p>
              <p>Maecenas ut scelerisque risus, aliquam porttitor diam. Sed facilisis sagittis tellus condimentum vestibulum. Duis non malesuada dolor, vitae scelerisque dolor. Aenean ut est eget nibh pulvinar luctus. Aliquam feugiat non justo non fermentum. Vivamus id erat euismod, mattis nulla quis, mollis lacus. Donec enim nulla, elementum et augue at, rhoncus egestas velit. In et dui sit amet tellus pulvinar volutpat. Praesent luctus ullamcorper ipsum, in ullamcorper enim elementum nec. Phasellus imperdiet, leo sit amet fermentum mattis, ipsum dolor placerat tellus, in gravida turpis sapien at magna. Nullam accumsan est in aliquet vulputate. Praesent ornare ex eget justo sollicitudin, id hendrerit tortor dictum. Vivamus eget facilisis orci. Ut quis dapibus leo. Aenean congue leo in sem porttitor, in suscipit urna fringilla.</p>
              <p>Maecenas ut scelerisque risus, aliquam porttitor diam. Sed facilisis sagittis tellus condimentum vestibulum. Duis non malesuada dolor, vitae scelerisque dolor. Aenean ut est eget nibh pulvinar luctus. Aliquam feugiat non justo non fermentum. Vivamus id erat euismod, mattis nulla quis, mollis lacus. Donec enim nulla, elementum et augue at, rhoncus egestas velit. In et dui sit amet tellus pulvinar volutpat. Praesent luctus ullamcorper ipsum, in ullamcorper enim elementum nec. Phasellus imperdiet, leo sit amet fermentum mattis, ipsum dolor placerat tellus, in gravida turpis sapien at magna. Nullam accumsan est in aliquet vulputate. Praesent ornare ex eget justo sollicitudin, id hendrerit tortor dictum. Vivamus eget facilisis orci. Ut quis dapibus leo. Aenean congue leo in sem porttitor, in suscipit urna fringilla.</p>
            </div>
          </TabsActionClick>
          <h2>Slide Tab</h2>
          <TabsActionClick>
            <div label="Tab 1">
              <p>Hi, this is the first tab.</p>
              <p>Proin eget mauris neque. Aenean id urna sit amet magna tincidunt gravida. Phasellus ultrices a diam vel consequat. Etiam pharetra erat vel fringilla pharetra. Proin posuere viverra quam, id finibus erat porttitor id. Vivamus elementum, orci eget viverra suscipit, arcu risus dictum arcu, vitae faucibus nisi ex mattis quam. Nam semper quis risus ac fermentum. Donec sodales massa et risus sagittis, faucibus porttitor felis tincidunt. Aenean ac pulvinar metus. Praesent viverra suscipit ipsum eget aliquam.</p>
            </div>
            <div label="Tab 2">
              <p>This is the 2nd tab.</p> 
              <p>Proin eget mauris neque. Aenean id urna sit amet magna tincidunt gravida. Phasellus ultrices a diam vel consequat. Etiam pharetra erat vel fringilla pharetra. Proin posuere viverra quam, id finibus erat porttitor id. Vivamus elementum, orci eget viverra suscipit, arcu risus dictum arcu, vitae faucibus nisi ex mattis quam. Nam semper quis risus ac fermentum. Donec sodales massa et risus sagittis, faucibus porttitor felis tincidunt. Aenean ac pulvinar metus. Praesent viverra suscipit ipsum eget aliquam.</p>
              <p>Maecenas ut scelerisque risus, aliquam porttitor diam. Sed facilisis sagittis tellus condimentum vestibulum. Duis non malesuada dolor, vitae scelerisque dolor. Aenean ut est eget nibh pulvinar luctus. Aliquam feugiat non justo non fermentum. Vivamus id erat euismod, mattis nulla quis, mollis lacus. Donec enim nulla, elementum et augue at, rhoncus egestas velit. In et dui sit amet tellus pulvinar volutpat. Praesent luctus ullamcorper ipsum, in ullamcorper enim elementum nec. Phasellus imperdiet, leo sit amet fermentum mattis, ipsum dolor placerat tellus, in gravida turpis sapien at magna. Nullam accumsan est in aliquet vulputate. Praesent ornare ex eget justo sollicitudin, id hendrerit tortor dictum. Vivamus eget facilisis orci. Ut quis dapibus leo. Aenean congue leo in sem porttitor, in suscipit urna fringilla.</p>
            </div>
            <div label="Tab 3">
              <p>And this is the 3rd tab.</p> 
              <p>Proin eget mauris neque. Aenean id urna sit amet magna tincidunt gravida. Phasellus ultrices a diam vel consequat. Etiam pharetra erat vel fringilla pharetra. Proin posuere viverra quam, id finibus erat porttitor id. Vivamus elementum, orci eget viverra suscipit, arcu risus dictum arcu, vitae faucibus nisi ex mattis quam. Nam semper quis risus ac fermentum. Donec sodales massa et risus sagittis, faucibus porttitor felis tincidunt. Aenean ac pulvinar metus. Praesent viverra suscipit ipsum eget aliquam.</p>
              <p>Maecenas ut scelerisque risus, aliquam porttitor diam. Sed facilisis sagittis tellus condimentum vestibulum. Duis non malesuada dolor, vitae scelerisque dolor. Aenean ut est eget nibh pulvinar luctus. Aliquam feugiat non justo non fermentum. Vivamus id erat euismod, mattis nulla quis, mollis lacus. Donec enim nulla, elementum et augue at, rhoncus egestas velit. In et dui sit amet tellus pulvinar volutpat. Praesent luctus ullamcorper ipsum, in ullamcorper enim elementum nec. Phasellus imperdiet, leo sit amet fermentum mattis, ipsum dolor placerat tellus, in gravida turpis sapien at magna. Nullam accumsan est in aliquet vulputate. Praesent ornare ex eget justo sollicitudin, id hendrerit tortor dictum. Vivamus eget facilisis orci. Ut quis dapibus leo. Aenean congue leo in sem porttitor, in suscipit urna fringilla.</p>
              <p>Maecenas ut scelerisque risus, aliquam porttitor diam. Sed facilisis sagittis tellus condimentum vestibulum. Duis non malesuada dolor, vitae scelerisque dolor. Aenean ut est eget nibh pulvinar luctus. Aliquam feugiat non justo non fermentum. Vivamus id erat euismod, mattis nulla quis, mollis lacus. Donec enim nulla, elementum et augue at, rhoncus egestas velit. In et dui sit amet tellus pulvinar volutpat. Praesent luctus ullamcorper ipsum, in ullamcorper enim elementum nec. Phasellus imperdiet, leo sit amet fermentum mattis, ipsum dolor placerat tellus, in gravida turpis sapien at magna. Nullam accumsan est in aliquet vulputate. Praesent ornare ex eget justo sollicitudin, id hendrerit tortor dictum. Vivamus eget facilisis orci. Ut quis dapibus leo. Aenean congue leo in sem porttitor, in suscipit urna fringilla.</p>
            </div>
          </TabsActionClick>
          <h2>Content Slide Tab</h2>
          <TabsActionClick>
            <div label="Tab 1">
              <p>Hi, this is the first tab.</p>
              <p>Proin eget mauris neque. Aenean id urna sit amet magna tincidunt gravida. Phasellus ultrices a diam vel consequat. Etiam pharetra erat vel fringilla pharetra. Proin posuere viverra quam, id finibus erat porttitor id. Vivamus elementum, orci eget viverra suscipit, arcu risus dictum arcu, vitae faucibus nisi ex mattis quam. Nam semper quis risus ac fermentum. Donec sodales massa et risus sagittis, faucibus porttitor felis tincidunt. Aenean ac pulvinar metus. Praesent viverra suscipit ipsum eget aliquam.</p>
            </div>
            <div label="Tab 2">
              <p>This is the 2nd tab.</p> 
              <p>Proin eget mauris neque. Aenean id urna sit amet magna tincidunt gravida. Phasellus ultrices a diam vel consequat. Etiam pharetra erat vel fringilla pharetra. Proin posuere viverra quam, id finibus erat porttitor id. Vivamus elementum, orci eget viverra suscipit, arcu risus dictum arcu, vitae faucibus nisi ex mattis quam. Nam semper quis risus ac fermentum. Donec sodales massa et risus sagittis, faucibus porttitor felis tincidunt. Aenean ac pulvinar metus. Praesent viverra suscipit ipsum eget aliquam.</p>
              <p>Maecenas ut scelerisque risus, aliquam porttitor diam. Sed facilisis sagittis tellus condimentum vestibulum. Duis non malesuada dolor, vitae scelerisque dolor. Aenean ut est eget nibh pulvinar luctus. Aliquam feugiat non justo non fermentum. Vivamus id erat euismod, mattis nulla quis, mollis lacus. Donec enim nulla, elementum et augue at, rhoncus egestas velit. In et dui sit amet tellus pulvinar volutpat. Praesent luctus ullamcorper ipsum, in ullamcorper enim elementum nec. Phasellus imperdiet, leo sit amet fermentum mattis, ipsum dolor placerat tellus, in gravida turpis sapien at magna. Nullam accumsan est in aliquet vulputate. Praesent ornare ex eget justo sollicitudin, id hendrerit tortor dictum. Vivamus eget facilisis orci. Ut quis dapibus leo. Aenean congue leo in sem porttitor, in suscipit urna fringilla.</p>
            </div>
            <div label="Tab 3">
              <p>And this is the 3rd tab.</p> 
              <p>Proin eget mauris neque. Aenean id urna sit amet magna tincidunt gravida. Phasellus ultrices a diam vel consequat. Etiam pharetra erat vel fringilla pharetra. Proin posuere viverra quam, id finibus erat porttitor id. Vivamus elementum, orci eget viverra suscipit, arcu risus dictum arcu, vitae faucibus nisi ex mattis quam. Nam semper quis risus ac fermentum. Donec sodales massa et risus sagittis, faucibus porttitor felis tincidunt. Aenean ac pulvinar metus. Praesent viverra suscipit ipsum eget aliquam.</p>
              <p>Maecenas ut scelerisque risus, aliquam porttitor diam. Sed facilisis sagittis tellus condimentum vestibulum. Duis non malesuada dolor, vitae scelerisque dolor. Aenean ut est eget nibh pulvinar luctus. Aliquam feugiat non justo non fermentum. Vivamus id erat euismod, mattis nulla quis, mollis lacus. Donec enim nulla, elementum et augue at, rhoncus egestas velit. In et dui sit amet tellus pulvinar volutpat. Praesent luctus ullamcorper ipsum, in ullamcorper enim elementum nec. Phasellus imperdiet, leo sit amet fermentum mattis, ipsum dolor placerat tellus, in gravida turpis sapien at magna. Nullam accumsan est in aliquet vulputate. Praesent ornare ex eget justo sollicitudin, id hendrerit tortor dictum. Vivamus eget facilisis orci. Ut quis dapibus leo. Aenean congue leo in sem porttitor, in suscipit urna fringilla.</p>
              <p>Maecenas ut scelerisque risus, aliquam porttitor diam. Sed facilisis sagittis tellus condimentum vestibulum. Duis non malesuada dolor, vitae scelerisque dolor. Aenean ut est eget nibh pulvinar luctus. Aliquam feugiat non justo non fermentum. Vivamus id erat euismod, mattis nulla quis, mollis lacus. Donec enim nulla, elementum et augue at, rhoncus egestas velit. In et dui sit amet tellus pulvinar volutpat. Praesent luctus ullamcorper ipsum, in ullamcorper enim elementum nec. Phasellus imperdiet, leo sit amet fermentum mattis, ipsum dolor placerat tellus, in gravida turpis sapien at magna. Nullam accumsan est in aliquet vulputate. Praesent ornare ex eget justo sollicitudin, id hendrerit tortor dictum. Vivamus eget facilisis orci. Ut quis dapibus leo. Aenean congue leo in sem porttitor, in suscipit urna fringilla.</p>
            </div>
          </TabsActionClick>
          </div>
      );

  
}
}

export default TabIndex;