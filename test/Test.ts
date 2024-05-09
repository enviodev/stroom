import assert from "assert";
import { 
  TestHelpers,
  EventsSummaryEntity,
  LnBTC_ApprovalEntity
} from "generated";
const { MockDb, LnBTC, Addresses } = TestHelpers;

import { GLOBAL_EVENTS_SUMMARY_KEY } from "../src/EventHandlers";


const MOCK_EVENTS_SUMMARY_ENTITY: EventsSummaryEntity = {
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

describe("LnBTC contract Approval event tests", () => {
  // Create mock db
  const mockDbInitial = MockDb.createMockDb();

  // Add mock EventsSummaryEntity to mock db
  const mockDbFinal = mockDbInitial.entities.EventsSummary.set(
    MOCK_EVENTS_SUMMARY_ENTITY
  );

  // Creating mock LnBTC contract Approval event
  const mockLnBTCApprovalEvent = LnBTC.Approval.createMockEvent({
    owner: Addresses.defaultAddress,
    spender: Addresses.defaultAddress,
    amount: 0n,
    mockEventData: {
      chainId: 1,
      blockNumber: 0,
      blockTimestamp: 0,
      blockHash: "0x0000000000000000000000000000000000000000000000000000000000000000",
      srcAddress: Addresses.defaultAddress,
      transactionHash: "0x0000000000000000000000000000000000000000000000000000000000000000",
      transactionIndex: 0,
      logIndex: 0,
    },
  });

  // Processing the event
  const mockDbUpdated = LnBTC.Approval.processEvent({
    event: mockLnBTCApprovalEvent,
    mockDb: mockDbFinal,
  });

  it("LnBTC_ApprovalEntity is created correctly", () => {
    // Getting the actual entity from the mock database
    let actualLnBTCApprovalEntity = mockDbUpdated.entities.LnBTC_Approval.get(
      mockLnBTCApprovalEvent.transactionHash +
        mockLnBTCApprovalEvent.logIndex.toString()
    );

    // Creating the expected entity
    const expectedLnBTCApprovalEntity: LnBTC_ApprovalEntity = {
      id:
        mockLnBTCApprovalEvent.transactionHash +
        mockLnBTCApprovalEvent.logIndex.toString(),
      owner: mockLnBTCApprovalEvent.params.owner,
      spender: mockLnBTCApprovalEvent.params.spender,
      amount: mockLnBTCApprovalEvent.params.amount,
      eventsSummary: "GlobalEventsSummary",
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualLnBTCApprovalEntity, expectedLnBTCApprovalEntity, "Actual LnBTCApprovalEntity should be the same as the expectedLnBTCApprovalEntity");
  });

  it("EventsSummaryEntity is updated correctly", () => {
    // Getting the actual entity from the mock database
    let actualEventsSummaryEntity = mockDbUpdated.entities.EventsSummary.get(
      GLOBAL_EVENTS_SUMMARY_KEY
    );

    // Creating the expected entity
    const expectedEventsSummaryEntity: EventsSummaryEntity = {
      ...MOCK_EVENTS_SUMMARY_ENTITY,
      lnBTC_ApprovalCount: MOCK_EVENTS_SUMMARY_ENTITY.lnBTC_ApprovalCount + BigInt(1),
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualEventsSummaryEntity, expectedEventsSummaryEntity, "Actual LnBTCApprovalEntity should be the same as the expectedLnBTCApprovalEntity");
  });
});
