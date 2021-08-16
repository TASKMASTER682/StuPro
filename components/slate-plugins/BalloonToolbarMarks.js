import React from 'react';
import {
  BalloonToolbar,
  ToolbarMark,
  ToolbarList,
  ToolbarLink,
  getSlatePluginType,
    MARK_BOLD,
    MARK_ITALIC,
    MARK_UNDERLINE,
    ELEMENT_UL,
    MARK_HIGHLIGHT,
    ELEMENT_H3,
    useStoreEditorRef,
    useEventEditorId,
} from '@udecode/slate-plugins';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import FormatListBulletedOutlinedIcon from '@material-ui/icons/FormatListBulletedOutlined';
import InsertLinkIcon from '@material-ui/icons/InsertLink';
import HighlightIcon from '@material-ui/icons/Highlight';
import Looks3OutlinedIcon from '@material-ui/icons/Looks3Outlined';






const BalloonToolbarMarks = () => {
  const editor = useStoreEditorRef(useEventEditorId('focus'));

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
        <ToolbarMark
          type={getSlatePluginType(editor, MARK_BOLD)}
          icon={<FormatBoldIcon />}
          tooltip={{ content: 'Bold (⌘B)', ...tooltip }}
        />
        <ToolbarMark
          type={getSlatePluginType(editor, MARK_ITALIC)}
          icon={<FormatItalicIcon />}
          tooltip={{ content: 'Italic (⌘I)', ...tooltip }}
        />
        <ToolbarMark
          type={getSlatePluginType(editor, MARK_UNDERLINE)}
          icon={<FormatUnderlinedIcon />}
          tooltip={{ content: 'Underline (⌘U)', ...tooltip }}
        />
        <ToolbarList
          type={getSlatePluginType(editor, ELEMENT_UL)}
          icon={<FormatListBulletedOutlinedIcon/>}
        />
          <ToolbarLink
          icon={<InsertLinkIcon/>}
        />
        <ToolbarMark
        type={getSlatePluginType(editor, MARK_HIGHLIGHT)}
        icon={<HighlightIcon  />} />
        <ToolbarElement
         type={getSlatePluginType(editor, ELEMENT_H3)}
         icon={<Looks3OutlinedIcon/>}
    />
      </BalloonToolbar>
    );
}

export default BalloonToolbarMarks;
