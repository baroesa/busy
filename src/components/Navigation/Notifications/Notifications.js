import React, { PropTypes } from 'react';
import NotificationFollowing from './NotificationFollowing';
import NotificationReply from './NotificationReply';
import NotificationTransfer from './NotificationTransfer';
import NotificationMention from './NotificationMention';
import './Notifications.less';

export const NOTIFICATION_FOLLOWING = 'NOTIFICATION_FOLLOWING';
export const NOTIFICATION_REPLY = 'NOTIFICATION_REPLY';
export const NOTIFICATION_TRANSFER = 'NOTIFICATION_TRANSFER';
export const NOTIFICATION_MENTION = 'NOTIFICATION_MENTION';

const Notifications = ({ onClick, onSeeAllClick, notifications }) =>
  <div className="Notifications">
    <div className="Notifications__content">
      {
        notifications && notifications.map((notification) => {
          if (notification.type === NOTIFICATION_FOLLOWING) {
            return (<NotificationFollowing
              onClick={id => onClick(id)} key={notification.id} {...notification}
            />);
          } else if (notification.type === NOTIFICATION_REPLY) {
            return (<NotificationReply
              onClick={id => onClick(id)} key={notification.id} {...notification}
            />);
          } else if (notification.type === NOTIFICATION_TRANSFER) {
            return (<NotificationTransfer
              onClick={id => onClick(id)} key={notification.id} {...notification}
            />);
          } else if (notification.type === NOTIFICATION_MENTION) {
            return (<NotificationMention
              onClick={id => onClick(id)} key={notification.id} {...notification}
            />);
          }

          return null;
        })
      }
    </div>
    <div className="Notifications__footer">
      <a onClick={onSeeAllClick}>See All</a>
    </div>
  </div>;

Notifications.propTypes = {
  onClick: PropTypes.func,
  onSeeAllClick: () => {},
  notifications: PropTypes.arrayOf(
    PropTypes.shape(),
  ),
};

Notifications.defaultProps = {
  onClick: () => {},
  onSeeAllClick: () => {},
};

export default Notifications;
