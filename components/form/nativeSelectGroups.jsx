import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "@/components/ui/native-select";

export function NativeSelectGroups() {
  return (
    <NativeSelect>
      <NativeSelectOption value="">Select department</NativeSelectOption>
      <NativeSelectOptGroup label="Καβάλας">
        <NativeSelectOption value="frontend">Καβάλας</NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label="Γρανίτης">
        <NativeSelectOption value="sales-rep">Γκρι</NativeSelectOption>
        <NativeSelectOption value="sales-rep">
          Γκρi Σφυρήλατη
        </NativeSelectOption>
        <NativeSelectOption value="sales-rep">Κίτρο Σαγρέ</NativeSelectOption>
        <NativeSelectOption value="account-manager">
          Κίτρο Σφυρήλατη
        </NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label="Dark Puma">
        <NativeSelectOption value="support">Dark Puma</NativeSelectOption>
      </NativeSelectOptGroup>
    </NativeSelect>
  );
}
