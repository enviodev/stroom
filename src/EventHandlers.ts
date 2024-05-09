/*
 *Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features*
 */
import {
  LnBTCContract,
    LnBTC_ApprovalEntity,
    LnBTC_MintBtcEventEntity,
    LnBTC_OwnershipTransferredEntity,
    LnBTC_PausedEntity,
    LnBTC_RedeemBtcEventEntity,
    LnBTC_TransferEntity,
    LnBTC_UnpausedEntity,
  SlnBTCContract,
    SlnBTC_ApprovalEntity,
    SlnBTC_DepositEntity,
    SlnBTC_NewRewardsCycleEntity,
    SlnBTC_OwnershipTransferredEntity,
    SlnBTC_TotalSupplyUpdatedEventEntity,
    SlnBTC_TransferEntity,
    SlnBTC_WithdrawEntity,
EventsSummaryEntity
} from "generated";

export const GLOBAL_EVENTS_SUMMARY_KEY = "GlobalEventsSummary";

const INITIAL_EVENTS_SUMMARY: EventsSummaryEntity = {
  id: GLOBAL_EVENTS_SUMMARY_KEY,
    lnBTC_ApprovalCount: BigInt(0),
    lnBTC_MintBtcEventCount: BigInt(0),
    lnBTC_OwnershipTransferredCount: BigInt(0),
    lnBTC_PausedCount: BigInt(0),
    lnBTC_RedeemBtcEventCount: BigInt(0),
    lnBTC_TransferCount: BigInt(0),
    lnBTC_UnpausedCount: BigInt(0),
    slnBTC_ApprovalCount: BigInt(0),
    slnBTC_DepositCount: BigInt(0),
    slnBTC_NewRewardsCycleCount: BigInt(0),
    slnBTC_OwnershipTransferredCount: BigInt(0),
    slnBTC_TotalSupplyUpdatedEventCount: BigInt(0),
    slnBTC_TransferCount: BigInt(0),
    slnBTC_WithdrawCount: BigInt(0),
};

    LnBTCContract.Approval.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    LnBTCContract.Approval.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    lnBTC_ApprovalCount: currentSummaryEntity.lnBTC_ApprovalCount + BigInt(1),
  };

  const lnBTC_ApprovalEntity: LnBTC_ApprovalEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      owner: event.params.owner      ,
      spender: event.params.spender      ,
      amount: event.params.amount      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.LnBTC_Approval.set(lnBTC_ApprovalEntity);
});
    LnBTCContract.MintBtcEvent.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    LnBTCContract.MintBtcEvent.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    lnBTC_MintBtcEventCount: currentSummaryEntity.lnBTC_MintBtcEventCount + BigInt(1),
  };

  const lnBTC_MintBtcEventEntity: LnBTC_MintBtcEventEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      _to: event.params._to      ,
      _value: event.params._value      ,
      _btcDepositId: event.params._btcDepositId      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.LnBTC_MintBtcEvent.set(lnBTC_MintBtcEventEntity);
});
    LnBTCContract.OwnershipTransferred.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    LnBTCContract.OwnershipTransferred.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    lnBTC_OwnershipTransferredCount: currentSummaryEntity.lnBTC_OwnershipTransferredCount + BigInt(1),
  };

  const lnBTC_OwnershipTransferredEntity: LnBTC_OwnershipTransferredEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      previousOwner: event.params.previousOwner      ,
      newOwner: event.params.newOwner      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.LnBTC_OwnershipTransferred.set(lnBTC_OwnershipTransferredEntity);
});
    LnBTCContract.Paused.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    LnBTCContract.Paused.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    lnBTC_PausedCount: currentSummaryEntity.lnBTC_PausedCount + BigInt(1),
  };

  const lnBTC_PausedEntity: LnBTC_PausedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      account: event.params.account      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.LnBTC_Paused.set(lnBTC_PausedEntity);
});
    LnBTCContract.RedeemBtcEvent.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    LnBTCContract.RedeemBtcEvent.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    lnBTC_RedeemBtcEventCount: currentSummaryEntity.lnBTC_RedeemBtcEventCount + BigInt(1),
  };

  const lnBTC_RedeemBtcEventEntity: LnBTC_RedeemBtcEventEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      _from: event.params._from      ,
      _BTCAddress: event.params._BTCAddress      ,
      _value: event.params._value      ,
      _id: event.params._id      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.LnBTC_RedeemBtcEvent.set(lnBTC_RedeemBtcEventEntity);
});
    LnBTCContract.Transfer.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    LnBTCContract.Transfer.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    lnBTC_TransferCount: currentSummaryEntity.lnBTC_TransferCount + BigInt(1),
  };

  const lnBTC_TransferEntity: LnBTC_TransferEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      from: event.params.from      ,
      to: event.params.to      ,
      amount: event.params.amount      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.LnBTC_Transfer.set(lnBTC_TransferEntity);
});
    LnBTCContract.Unpaused.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    LnBTCContract.Unpaused.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    lnBTC_UnpausedCount: currentSummaryEntity.lnBTC_UnpausedCount + BigInt(1),
  };

  const lnBTC_UnpausedEntity: LnBTC_UnpausedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      account: event.params.account      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.LnBTC_Unpaused.set(lnBTC_UnpausedEntity);
});
    SlnBTCContract.Approval.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    SlnBTCContract.Approval.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    slnBTC_ApprovalCount: currentSummaryEntity.slnBTC_ApprovalCount + BigInt(1),
  };

  const slnBTC_ApprovalEntity: SlnBTC_ApprovalEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      owner: event.params.owner      ,
      spender: event.params.spender      ,
      amount: event.params.amount      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.SlnBTC_Approval.set(slnBTC_ApprovalEntity);
});
    SlnBTCContract.Deposit.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    SlnBTCContract.Deposit.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    slnBTC_DepositCount: currentSummaryEntity.slnBTC_DepositCount + BigInt(1),
  };

  const slnBTC_DepositEntity: SlnBTC_DepositEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      caller: event.params.caller      ,
      owner: event.params.owner      ,
      assets: event.params.assets      ,
      shares: event.params.shares      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.SlnBTC_Deposit.set(slnBTC_DepositEntity);
});
    SlnBTCContract.NewRewardsCycle.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    SlnBTCContract.NewRewardsCycle.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    slnBTC_NewRewardsCycleCount: currentSummaryEntity.slnBTC_NewRewardsCycleCount + BigInt(1),
  };

  const slnBTC_NewRewardsCycleEntity: SlnBTC_NewRewardsCycleEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      cycleEnd: event.params.cycleEnd      ,
      rewardAmount: event.params.rewardAmount      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.SlnBTC_NewRewardsCycle.set(slnBTC_NewRewardsCycleEntity);
});
    SlnBTCContract.OwnershipTransferred.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    SlnBTCContract.OwnershipTransferred.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    slnBTC_OwnershipTransferredCount: currentSummaryEntity.slnBTC_OwnershipTransferredCount + BigInt(1),
  };

  const slnBTC_OwnershipTransferredEntity: SlnBTC_OwnershipTransferredEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      previousOwner: event.params.previousOwner      ,
      newOwner: event.params.newOwner      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.SlnBTC_OwnershipTransferred.set(slnBTC_OwnershipTransferredEntity);
});
    SlnBTCContract.TotalSupplyUpdatedEvent.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    SlnBTCContract.TotalSupplyUpdatedEvent.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    slnBTC_TotalSupplyUpdatedEventCount: currentSummaryEntity.slnBTC_TotalSupplyUpdatedEventCount + BigInt(1),
  };

  const slnBTC_TotalSupplyUpdatedEventEntity: SlnBTC_TotalSupplyUpdatedEventEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      _nonce: event.params._nonce      ,
      _totalBTCSupply: event.params._totalBTCSupply      ,
      _totalShares: event.params._totalShares      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.SlnBTC_TotalSupplyUpdatedEvent.set(slnBTC_TotalSupplyUpdatedEventEntity);
});
    SlnBTCContract.Transfer.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    SlnBTCContract.Transfer.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    slnBTC_TransferCount: currentSummaryEntity.slnBTC_TransferCount + BigInt(1),
  };

  const slnBTC_TransferEntity: SlnBTC_TransferEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      from: event.params.from      ,
      to: event.params.to      ,
      amount: event.params.amount      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.SlnBTC_Transfer.set(slnBTC_TransferEntity);
});
    SlnBTCContract.Withdraw.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    SlnBTCContract.Withdraw.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    slnBTC_WithdrawCount: currentSummaryEntity.slnBTC_WithdrawCount + BigInt(1),
  };

  const slnBTC_WithdrawEntity: SlnBTC_WithdrawEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      caller: event.params.caller      ,
      receiver: event.params.receiver      ,
      owner: event.params.owner      ,
      assets: event.params.assets      ,
      shares: event.params.shares      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.SlnBTC_Withdraw.set(slnBTC_WithdrawEntity);
});
