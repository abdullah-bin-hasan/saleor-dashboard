import gql from "graphql-tag";

import { shippingZoneFragment } from "./shipping";

export const channelErrorFragment = gql`
  fragment ChannelErrorFragment on ChannelError {
    code
    field
    message
  }
`;

export const channelFragment = gql`
  fragment ChannelFragment on Channel {
    id
    isActive
    name
    slug
    currencyCode
  }
`;

// # ${shippingZoneFragment}
//   # shippingZones {
//   #   ...ShippingZoneFragment
//   # }
export const channelDetailsFragment = gql`
  ${channelFragment}
  fragment ChannelDetailsFragment on Channel {
    ...ChannelFragment
    hasOrders
  }
`;
