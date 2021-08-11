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
    useStoreEditorRef,
    useEventEditorId,
} from '@udecode/slate-plugins';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import FormatListBulletedOutlinedIcon from '@material-ui/icons/FormatListBulletedOutlined';
import InsertLinkIcon from '@material-ui/icons/InsertLink';
import HighlightIcon from '@material-ui/icons/Highlight';





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
          tooltip={{ content: 'Underline (⌘U)', ...tooltip }}
        />
          <ToolbarLink
          icon={<InsertLinkIcon/>}
          tooltip={{ content: 'Underline (⌘U)', ...tooltip }}
        />
        <ToolbarMark
        type={getSlatePluginType(editor, MARK_HIGHLIGHT)}
        icon={<HighlightIcon  />} />
        
      </BalloonToolbar>
    );
}

export default BalloonToolbarMarks;
