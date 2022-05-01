import React from 'react';
import {
  BalloonToolbar,
  MarkToolbarButton,
  LinkToolbarButton,
  ListToolbarButton,
  BlockToolbarButton,
  getPluginType,
    MARK_BOLD,
    MARK_ITALIC,
    MARK_UNDERLINE,
    ELEMENT_UL,
    MARK_HIGHLIGHT,
    ELEMENT_H3,
    usePlateEditorRef
} from '@udecode/plate';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import FormatListBulletedOutlinedIcon from '@material-ui/icons/FormatListBulletedOutlined';
import InsertLinkIcon from '@material-ui/icons/InsertLink';
import HighlightIcon from '@material-ui/icons/Highlight';
import Looks3OutlinedIcon from '@material-ui/icons/Looks3Outlined';






const BalloonMarkToolbarButtons = () => {
  const editor = usePlateEditorRef()

    const arrow = false;
    const theme = '#00cdbb';
    const direction = 'top';
    const hiddenDelay = 0;
    const tooltip = {
      arrow: true,
      delay: 0,
      duration: [200, 0],
      hideOnClick: false,
      offset: [0, 17],
      placement: 'top',
    };

    return (
      <BalloonToolbar
        direction={direction}
        hiddenDelay={hiddenDelay}
        theme={theme}
        arrow={arrow}
      >
        <MarkToolbarButton
          type={getPluginType(editor, MARK_BOLD)}
          icon={<FormatBoldIcon />}
          tooltip={{ content: 'Bold (⌘B)', ...tooltip }}
        />
        <MarkToolbarButton
          type={getPluginType(editor, MARK_ITALIC)}
          icon={<FormatItalicIcon />}
          tooltip={{ content: 'Italic (⌘I)', ...tooltip }}
        />
        <MarkToolbarButton
          type={getPluginType(editor, MARK_UNDERLINE)}
          icon={<FormatUnderlinedIcon />}
          tooltip={{ content: 'Underline (⌘U)', ...tooltip }}
        />
        <ListToolbarButton
          type={getPluginType(editor, ELEMENT_UL)}
          icon={<FormatListBulletedOutlinedIcon/>}
        />
          <LinkToolbarButton
          icon={<InsertLinkIcon/>}
        />
        <MarkToolbarButton
        type={getPluginType(editor, MARK_HIGHLIGHT)}
        icon={<HighlightIcon  />} />
        <BlockToolbarButton
         type={getPluginType(editor, ELEMENT_H3)}
         icon={<Looks3OutlinedIcon/>}
    />
      </BalloonToolbar>
    );
}

export default BalloonMarkToolbarButtons;
